import React from 'react';

import Home from './modules/home';
import Header from './modules/navbar'

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <Header/>
        <Home/>
    </div>
    );
  }
   
}

export default App;
