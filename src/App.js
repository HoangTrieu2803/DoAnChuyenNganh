
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import {renderRouteHome} from "./routes/index";
import {Route} from "react-router-dom";
function App() {
  return (
   <div>
    <BrowserRouter>
        <Switch>
          {renderRouteHome()}
        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
