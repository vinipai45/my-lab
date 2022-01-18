import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./constants";
import { convertDataToHtml } from "./convertDataToHtml";

const DEFAULT_INITIAL_DATA = () => {
  return {
    blocks: [
      {
        type: "header",
        data: {
          text: "This is my awesome editor!",
          level: 1,
        },
      },
      // {
      //   type: "graph",
      //   data: {
      //     chart_type: "column",
      //   },
      // },
      // {
      //   type: "graph",
      //   data: {
      //     chart_type: "line",
      //   },
      // },
      // {
      //   type: "graph",
      //   data: {
      //     chart_type: "column_line",
      //   },
      // },
    ],
  };
};

const Editor = () => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
  const EDITOR_HOLDER_ID = "editorjs";

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ejInstance]);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },

      onChange: () => {
        editor.saver.save().then((data) => {
          console.log(data.blocks, "data on change");
          setEditorData(data);
          convertDataToHtml(data.blocks);
        });
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };

  return <div id={EDITOR_HOLDER_ID}></div>;
};

export default Editor;
