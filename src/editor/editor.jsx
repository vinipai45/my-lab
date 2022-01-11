import React, { useState } from "react";
import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from "./constants";
import './editor.scss'

const ReactEditorJS = createReactEditorJS()

const ReactEditor = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div style={{ border: '1px solid #000' }}>

      <ReactEditorJS
        tools={EDITOR_JS_TOOLS
        }
        i18n={{
          messages: {}
        }}
        data={{
          time: 1556098174501,
          blocks: [
            {
              type: "header",
              data: {
                text: "Editor.js",
                level: 2
              }
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Clean data is useful to sanitize, validate and process on the backend."
              }
            },
            {
              type: "image",
              data: {
                file: {
                  url:
                    require("../download.png")
                },
              }
            },
            {
              type: "graph",
              data: {
                chart_type: "column_line", //line,column,column_line
              },
            },
          ],
          version: "2.12.4"
        }}
      />
    </div>
  );
};

export default ReactEditor
