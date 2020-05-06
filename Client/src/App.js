import React from 'react';

import Home from './modules/home';
import Header from './modules/navbar';
import Courses from './modules/courses';
import Teachers from './modules/teachers/teachers';

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <Teachers/>
    </div>
    );
  }
   
}

export default App;
