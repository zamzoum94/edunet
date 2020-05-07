import React from 'react';

import Home from './modules/home';
import Header from './modules/navbar';
import Courses from './modules/courses';
import Teacher from './modules/teacher'

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <Teacher/>
    </div>
    );
  }
   
}

export default App;
