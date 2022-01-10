export default class MyTool {
    static get toolbox() {
        return {
            icon: `<i class="fas fa-address-book"></i>`,
            title: 'Chart',
        };
    }
    constructor({ data, api }) {
        this.api = api;
        this.button = document.createElement('div');
    }

    myMethod() {
        this.api.listeners.on(this.button, 'click', () => {
            console.log('Button clicked!');
        }, false);
    }

    destroy() {
        this.api.listeners.off(this.button, 'click', () => {
            console.log('Button clicked!');
        }, false);
    }
}
