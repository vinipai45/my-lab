import React from "react";
import ReactDOM from "react-dom";
import RenderCharts from "../components/RenderCharts";
import ReactDOMServer from "react-dom/server";


export default class Chart extends React.Component {
    static get toolbox() {
        return {
            icon: `<i class="fas fa-drafting-compass"></i>`,
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

        const onDataChange = (newData) => {
            this.data = {
                ...newData
            };
        }


        ReactDOM.render(
            <div>
                <RenderCharts type="line" />
            </div>,
            rootNode
        );

        return this.nodes.holder;
    }

    save() {
        return this.data;
    }
}
