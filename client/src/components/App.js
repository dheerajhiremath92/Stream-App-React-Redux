import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";
import Header from "./Header";
const App = () => { 
  return (
    //BROWSEROUTER HISTORY OBJECT
    <div className="ui container">
      
      <Router history={history}> 
        <div> 
          <Header />
          <Switch> 
            <Route path="/" exact component={StreamList} />
            <Route path="/Streams/new" exact component={StreamCreate} />
            <Route path="/Streams/edit/:id" exact component={StreamEdit} />
            <Route path="/Streams/delete/:id" exact component={StreamDelete} />
            <Route path="/Streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
// Switch --> helps in navigation , if not used upon routing to path="/Streams/new" even "/streams/:id" --> shows up because the quesry paramet :id can be anything!
export default App;
