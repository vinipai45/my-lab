import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from "./constants";
import './editor.scss'

//https://www.youtube.com/watch?v=fJY-taFGc1o

const ReactEditorJS = createReactEditorJS()

const ReactEditor = () => {


  const [editorData, setEditorData] = useState({
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
            "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
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
    version: "2.12.4"
  })

  useEffect(() => {
    console.log(editorData)
  }, [editorData])


  return (
    <div style={{ margin: '30px' }}>

      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        data={editorData}
      />


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
                  text:
                    "Clean data is useful to sanitize, validate and process on the backend."
                }
              },
            ]
          })

        }}
      >
        Set State
      </Button>

    </div>
  );
};

export default ReactEditor
