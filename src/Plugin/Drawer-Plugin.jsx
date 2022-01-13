import { default as React } from 'react';
import ReactDOM from 'react-dom';
import CustomDrawer from '../components/drawer';
import Googlesheets from '../components/Google-sheets';

export default class Drawer {

    static get toolbox() {
        return {
            icon: `<i id="graphIcon" class="far fa-chart-bar"></i>`,
            title: 'Chart',
        };
    }

    static get isReadOnlySupported() {
        return true;
    }

    constructor({ data, config, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;
        // this.data = {
        //     events: data.events || [],
        // };

        // this.CSS = {
        //     wrapper: 'walkthrough-timeline',
        // };

        this.nodes = {
            holder: null,
        };
    }

    render() {
        const rootNode = document.createElement('div');
        // rootNode.setAttribute('class', this.CSS.wrapper);
        this.nodes.holder = rootNode;

        // const onDataChange = (newData) => {
        //     this.data = {
        //         ...newData
        //     };
        // }

        ReactDOM.render(
            (
                <CustomDrawer
                    title="add Graph"
                >
                    <Googlesheets />
                </CustomDrawer>
            ),
            rootNode);

        return this.nodes.holder;
    }

    save() {
        return this.data;
    }
}
