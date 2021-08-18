import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homePage';
import Intent from './pages/intentDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/intent' exact component={Intent} />
      </Switch>
    </Router>
  );
}

export default App;
