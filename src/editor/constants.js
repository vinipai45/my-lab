import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import FontSize from 'editorjs-inline-font-size-tool'
import FontColor from 'editorjs-text-color-plugin'
import FontFamily from 'editorjs-inline-font-family-tool'
import Chart from "../Plugin/Charts-Custom-Plugin";
import Drawer from "../Plugin/Drawer-Plugin"

export const EDITOR_JS_TOOLS = {
  header: Header,
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  linkTool: LinkTool,
  image: Image,
  checklist: CheckList,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  graph: Chart,
  drawer: Drawer,
  FontSize: FontSize,
  FontColor: FontColor,
  FontFamily: FontFamily
};
