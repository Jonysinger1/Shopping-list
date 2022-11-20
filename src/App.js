
import Navbar from './components/navbar';
import Home from './components/home';
import Product from './components/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
         <Switch>
            <Route path="/:id">
              <Product />
            </Route>
            <Route path="/">
              <Navbar />
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
