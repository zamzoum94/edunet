import React from 'react';
import {BrowserRouter , Route}from 'react-router-dom';
import Home from './modules/home';
import Header from './modules/navbar';
import Courses from './modules/courses';
import Teachers from './modules/teachers/teachers';
import Navbar from './modules/navbar';

export default class App  extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <BrowserRouter>
      <div className='container'>
       <Navbar/>
       <Route exact path="/" component= {Home}/>
       <Route path = "/Teachers" component={Teachers}/>
       <Route path = "/Courses" component={Courses}/>
    </div>
    </BrowserRouter>
    );
  }
   
}


