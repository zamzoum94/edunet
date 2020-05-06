import React from 'react';

import Home from './modules/home';
import Header from './modules/navbar';
import Courses from './modules/courses';

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <Courses/>
    </div>
    );
  }
   
}

export default App;
