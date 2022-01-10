import { default as React } from 'react';
import ReactDOM from 'react-dom';
import RenderChart from './RenderChart';


export default class Chart {

    static get toolbox() {
        return {
            icon: `<i class="far fa-chart-bar"></i>`,
            title: 'Chart',
        };
    }

    constructor({ data, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;
        this.data = {
            events: data.events || [],
        };


        this.nodes = {
            holder: null,
        };
    }

    render() {
        const rootNode = document.createElement('div');
        this.nodes.holder = rootNode;

        // const onDataChange = (newData) => {
        //     this.data = {
        //         ...newData
        //     };
        // }

        ReactDOM.render(
            (
                // <EventChart />
                <RenderChart type='line' />
            ),
            rootNode);

        return this.nodes.holder;
    }

    save() {
        return this.data;
    }
}