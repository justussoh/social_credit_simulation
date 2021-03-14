import './App.css';
import { Route, Switch } from "react-router-dom";
import { About } from "./components/About/about"
import { Simulation } from "./components/Simulation/simulation"

function App() {
  return (
    <div className="App">
      <main className="flex-1">
        <Switch>
          <Route exact path="/" component={Simulation} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
