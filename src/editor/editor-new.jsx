import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { Button } from "@material-ui/core";
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

      // OLD ONCHANGE
      // onChange: async () => {
      //   let content = await this.editorjs.saver.save();
      //   // Put your logic here to save this data to your DB
      //   setEditorData(content);
      //   console.log("content");
      // },

      // NEW ONCHANGE
      onChange: () => {
        editor.saver.save().then(data => {
          console.log(data.blocks, "data on change");
          setEditorData(data);
          convertDataToHtml(data.blocks);
        })
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };

  return (
    <React.Fragment>
      <div id={EDITOR_HOLDER_ID}></div>
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
