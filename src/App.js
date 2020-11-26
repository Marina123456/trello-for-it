import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from "react";
import Trello from './Trello';
import ProjectContainer from './ProjectContainer';

function App () {

  return (
    <div>
    <Router basename={'/trello'} >
    <Switch>
        <Route exact  path={'/'} component={ProjectContainer} />
        <Route  path={'/:id'} component={Trello} />

    </Switch>


     </Router>
    </div>
  );

}

export default App;
