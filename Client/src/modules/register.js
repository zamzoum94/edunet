import React from 'react';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            role:null,
            firstName :null,
            lastName : null,
            email : null,
            password : null,
            image : null
        }
    }
    // collect values from inputs
    handleInput(event){
        let target = event.target.name;
        let value = event.target.value;
        this.state[target]=value;
        
    }
    handlSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <form>
                  <div className='form-group'>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='First name' name='firstName' onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='Last name' name='lastName'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='email' placeholder='Email' name='email'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='password' placeholder='Password' name='password'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='Picture' name='image'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-6'>
                              <div className='form-check'>
                                  <label htmlFor='role'>Role</label>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md'>
                                  <div className='form-check'>
                                      <input className='form-check-input' type='radio' name='role' value='teacher' onChange={this.handleInput.bind(this)}/>
                                      <label className = 'form-check-label' htmlFor='role'>Teacher</label>
                                  </div>
                              </div>
                              <div className='col-md'>
                                  <div className='form-check'>
                                      <input className='form-check-input' type='radio' name='role' value='student'onChange={this.handleInput.bind(this)}/>
                                      <label className = 'form-check-label' htmlFor='role'>Student</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                            <button type="submit" className="btn btn-primary">SignUp</button>
                          </div>
                      </div>
                  </div>
            </form>
        </div> 
        );
    }
}