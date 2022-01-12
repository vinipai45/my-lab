import { BrowserRouter, Route, Switch } from "react-router-dom";

import Editor from "./editor/editor";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Editor />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
