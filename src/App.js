import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from "react";
import Trello from './Trello';


function App () {

  return (
    <div>
    <Router basename={'/trello'}>
        <Route  path={'/'} component={Trello} />
     </Router>
    </div>
  );

}

export default App;
