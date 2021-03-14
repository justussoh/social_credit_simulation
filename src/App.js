import './App.css';
import { Route, Switch } from "react-router-dom";
import { About } from "./components/About/about"

function App() {
  return (
    <div className="App">
      <main className="flex-1">
        <Switch>
          <Route key='/about' exact={true} component={About} />
          <Route key='/' component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
