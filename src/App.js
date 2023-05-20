
import './App.css';
import HomePage from "./pages/home/HomePage"
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
