import React from 'react';
import Header from  './Components/Header'
import './App.css'
import Topic from './Components/Topic'
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Components/Profile"
import Education from "./Components/Education";
import Skill from './Components/Skill'
import Hobby from './Components/Hobby';
import Work from './Components/Work'

function App() {
  return (
    <div className="app">
      <div>
        <Header/>
      </div>
      <div class="flex">
      <BrowserRouter>
          <Route path="/"  component={Topic}/>
          <Route path="/" exact component={Profile}/>
          <Route path="/edu" component={Education} />
          <Route path="/skill" component={Skill} />
          <Route path="/work" component={Work} />
          {/* <Route path="/hobby" component={Hobby} /> */}
        </BrowserRouter>
      </div>
      <div>
          <footer class="footer">
              To send a Mail <a href="mailto:alen.maxx17@gmail.com">Click_Here</a> &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp; To make a Call <a href="tel:+918660928768">Click_Here</a>
          </footer>
      </div>
     
    </div>
  );
}

export default App;
