// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Livros
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Catálogo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dados">
                    Novo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={LivroLista} />
            <Route path="/dados" component={LivroDados} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;



