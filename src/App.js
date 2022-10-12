import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);

export default App;