//import logo from './logo.svg';
import './App.css';

import React, { useState} from 'react'
import Navbar from './component/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const App=()=>  {
 const [progress, setProgress] = useState(0)
 // setProgress=(progress)=>{
    //setState({progress:progress})
  //}
 
    return (
      <div>
      <Router>

      <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
        
      />

        <Navbar/>
        
        <Switch>
          <Route exact path="/"><News   setProgress={setProgress}    key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress}   key="business"  pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/enterntain"><News setProgress={setProgress}   key= "entertainment" pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress}    key="sports" pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/health"><News setProgress={setProgress}    key= "health" pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress}    key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress}    key= "technology" pageSize={5} country="in" category="technology"/></Route>
         
         
        </Switch>

        </Router>
      </div>
    )
  
}

export default App;
