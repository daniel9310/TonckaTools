// src/App.js
//Para intalar las  funciones de google maps ---npm install react-bootstrap bootstrap @react-google-maps/api
import React from "react";
import HomePage from "./pages/HomePage";
import {Routes,Route,Switch} from "react-router-dom"
import ToolList from "./components/ToolList";
import ToolDetail from "./components/ToolDetail";

const App = () => {
  return(
    <div className="App">
      {/* <Routers>
      <div >
        <Switch>
          <Route exact path="/" component={ToolList} />
          <Route path="/tools/:id" component={ToolDetail} />
        </Switch>
      </div>
      </Routers> */}
      {/* <Routes>
        <Route exact path="/" component={ToolList} />
        <Route path="/tools/:id" component={ToolDetail}/>
      </Routes> */}
      <HomePage />
    </div>
  )
}

export default App;