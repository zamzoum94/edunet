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
      id : localStorage.getItem('id'), 
      role : localStorage.getItem('role'),
      token: localStorage.getItem('token'),
      auth : (localStorage.getItem('id') === null ? false:true)
    }
  }

  loggedIn(id, token, role){
    if(this.id !== null){
      this.setState({
        id : id,
        token : token,
        role : role,
        auth : true
      })
    } 
  }

  logout(){
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.setState({
        id : null,
        token : null,
        role : null,
        auth : false
      })
      window.location.href = 'http://localhost:3000'
  }

  render(){
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar user={this.state} logout={this.logout.bind(this)} login={this.loggedIn.bind(this)}/>
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


