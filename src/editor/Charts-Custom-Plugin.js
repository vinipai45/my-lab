import React from 'react';
import ReactDOM from 'react-dom';
// import Charts from './RenderCharts';
import Googlesheets from "./Google-sheets";
import CustomDrawer from "./drawer";


export default class Chart extends React.Component {
    constructor({ data, api, readOnly }) {
        super()
        this.state = {
            openGraph: false
        };
        this.api = api;
        this.readOnly = readOnly;
        this.data = {
            events: data.events || [],
        };

        this.nodes = {
            holder: null,
        };
    }

    setOpenGraph = () => {
        this.setState({
            openGraph: true
        })
    }

    static get toolbox() {
        return {
            icon: `<i onClick={this.setOpenGraph} class="far fa-chart-bar"></i>`,
            title: 'Chart',
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
                <div>
                    <CustomDrawer
                        openDrawer={this.state.openGraph}
                        setOpenDrawer={this.setOpenGraph}
                        title="add Graph"
                    >
                        <Googlesheets />
                    </CustomDrawer>
                </div>
            ),
            rootNode);

        return this.nodes.holder;
    }

    save() {
        return this.data;
    }
}