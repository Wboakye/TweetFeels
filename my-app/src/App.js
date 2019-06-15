import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home'


class App extends Component {
  render() {
    return (<div className="container">
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route path='/contact' component={Contact} /> */}
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;