import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HotelAdmin from './pages/admin/hotel';
import Room from './pages/admin/room';
import Admin from './pages/admin/main';
import Home from './pages/public/home';
import Hotel from './pages/public/hotel';
import Confirm from './pages/public/confirm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hotel/" component={Hotel} />
          <Route path="/admin/hotel/" component={HotelAdmin} />
          <Route path="/admin/room/" component={Room} />
          <Route path="/admin/" component={Admin} />
          <Route path="/confirm/" component={Confirm} />
          <Route
            render={() => <h2 className="notFound">404 Page Not Found</h2>}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
