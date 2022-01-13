import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { Button } from "@material-ui/core";
import { EDITOR_JS_TOOLS } from "./constants";

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
    ],
  };
};

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
  const EDITTOR_HOLDER_ID = "editorjs";

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, [ejInstance]);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };
  console.log(editorData);
  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}></div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setEditorData({
            ...editorData,
            blocks: [
              ...editorData.blocks,
              {
                type: "paragraph",
                data: {
                  text: "Clean data is useful to sanitize, validate and process on the backend.",
                },
              },
              {
                type: "header",
                data: {
                  text: "Editor.js",
                  level: 2,
                },
              },
              {
                type: "paragraph",
                data: {
                  text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
                },
              },
              {
                type: "paragraph",
                data: {
                  text: "Clean data is useful to sanitize, validate and process on the backend.",
                },
              },
              {
                type: "image",
                data: {
                  file: {
                    url: require("../download.png"),
                  },
                },
              },
            ],
          });
        }}
      >
        Update
      </Button>
    </React.Fragment>
  );
};

export default Editor;
