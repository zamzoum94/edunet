import React from 'react';

export default class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <form>
                  <div className='form-group'>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='First name' name='firstName'/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='Last name' name='lastName'/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='email' placeholder='Email' name='email'/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='password' placeholder='Password' name='password'/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md'>
                              <input className='form-control' type='text' placeholder='Picture' name='urlPicture'/>
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
                                      <input className='form-check-input' type='radio' name='role' value='teacher' checked/>
                                      <label className = 'form-check-label' htmlFor='role'>Teacher</label>
                                  </div>
                              </div>
                              <div className='col-md'>
                                  <div className='form-check'>
                                      <input className='form-check-input' type='radio' name='role' value='student'/>
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