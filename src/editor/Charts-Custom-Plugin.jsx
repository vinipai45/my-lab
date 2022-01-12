import React from "react";
import ReactDOM from "react-dom";
import RenderCharts from "./RenderCharts";
import Googlesheets from "./Google-sheets";
import CustomDrawer from "./drawer";

export default class Chart extends React.Component {
    static get toolbox() {
        return {
            icon: `<i id="graphIcon" class="far fa-chart-bar"></i>`,
            title: "Chart",
        };
    }

    constructor({ data, api, readOnly }) {
        super();
        this.state = {
            openGraph: false,
        };
        this.api = api;
        this.readOnly = readOnly;
        // this.data = {
        //     events: data.events || [],
        // };
        this.data = data;
        this.nodes = {
            holder: null,
        };
        this.attachEventListnerToGraph = this.attachEventListnerToGraph.bind(this);
        this.setOpenGraph = this.setOpenGraph.bind(this);

        // console.log(this.data, "data")
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.attachEventListnerToGraph();
    }

    openToolbar() {
        this.api.toolbar.open();
        console.log("open");
    }

    setOpenGraph = () => {
        this.setState({
            openGraph: true,
        });
        console.log("setState");
    };

    attachEventListnerToGraph = () => {
        const element = document.getElementById("graphIcon");
        if (element) {
            element.addEventListener("click", this.setOpenGraph);
        }
    };

    render() {
        const rootNode = document.createElement("div");
        this.nodes.holder = rootNode;

        // const onDataChange = (newData) => {
        //     this.data = {
        //         ...newData
        //     };
        // }

        ReactDOM.render(
            <div>
                <CustomDrawer
                    title="add Graph"
                >
                    <Googlesheets />
                </CustomDrawer>

                {/* <RenderCharts type={this.data.chart_type} /> */}
            </div>,
            rootNode
        );

        return this.nodes.holder;
    }

    save() {
        return this.data;
    }
}
