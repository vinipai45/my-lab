import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Editor from "./editor/editor";
import TestRedux from './TestRedux/TestRedux';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <Editor />
          </Route>

          <Route path="/test-redux" exact>
            <TestRedux />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
