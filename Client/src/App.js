import React from 'react';
import {BrowserRouter , Route, Router}from 'react-router-dom';
import Home from './modules/home';
import Navbar from './modules/navbar';
import Courses from './modules/courses';
import Teacher from './modules/teacher';
import Search from "./modules/search";
import Course from './modules/course';
import Teachers from './modules/teachers/teachers'
import SearchByCategory  from './modules/searchbycategory';

import TeacherLog from './modules/profile/teacherlog'

import StudentLog from './modules/profile/studentlog'

import CreateCourse from './modules/profile/createcourse';

export default class App  extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id : 1, 
      auth : false,
      role : ''
    }
  }
  render(){
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar user={this.state}/>
          <Route exact path='/' component={Home}></Route>
          <Route path='/teachers' component={Teachers}></Route>
          <Route path='/courses' component={Courses}></Route>
          <Route path='/teacher/:id' component={Teacher}></Route>
          <Route path='/search/:value' component={Search}></Route>
          <Route path='/teacherprofile/:id' component={TeacherLog}/>
          <Route path='/course/:id' component={Course}/>
          <Route path='/searchByCategory/:category' component={SearchByCategory}/>
          <Route path='/createcourse/:id' component={CreateCourse}/>
          <Route path='/studentprofile/:id' component={StudentLog}/>
       </div>
    </BrowserRouter>
    );
  }
   
}


