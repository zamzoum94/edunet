import React from 'react';
import {BrowserRouter , Route}from 'react-router-dom';
import Home from './modules/home';
import Navbar from './modules/navbar';
import Courses from './modules/courses';
import Teacher from './modules/teacher'
import Search from "./modules/search"

import Teachers from './modules/teachers/teachers'

export default class App  extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar/>
          <Route exact path='/' component={Home}></Route>
          <Route path='/teachers' component={Teachers}></Route>
          <Route path='/courses' component={Courses}></Route>
          <Route path='/teacher' component={Teacher}></Route>
          <Route path='/search' component={Search}></Route>
       </div>
    </BrowserRouter>
    );
  }
   
}


