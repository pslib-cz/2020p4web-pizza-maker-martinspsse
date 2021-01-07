import './App.css';
import {Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import {createBrowserHistory} from "history";
import Content from "./components/Content";
import Calzone from "./components/Calzone";
import Ingredients from "./components/Ingredients";
import NotFound from "./components/NotFound";
import Pizza from "./components/Pizza";
import Title from "./components/Title";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router>
        <Content>
          <Switch>
            <Route path="/" component={Title} />
            <Route path="/order/pizza" component={Pizza} />
            <Route path="/order/calzone"  component={Calzone} />
            <Route path="/ingredients"  component={Ingredients} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Router>
    </div>
  );
}

export default App;
