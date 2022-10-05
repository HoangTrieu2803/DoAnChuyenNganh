
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import {renderRouteHome} from "./routes/index";
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
