import React from 'react';

export default class CreateCourse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teacherId : props.match.params.id,
            course : {}
        }
    }

    handleInput(event){
        let target = event.target.name;
        let value = event.target.value;
        this.state.course[target] = value;
    }

    handlSubmit(event){
        event.preventDefault();
        let course = this.state.course
        course.teacherId = this.state.teacherId;
        fetch("http://localhost:8080/courses",{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(course)
        })
        .then(res=>{
            console.log('done');
            window.location.href = `http://localhost:3000/teacherprofile/${this.state.teacherId}`
        })
        .catch(err=>{
            console.log({
                error : err
            })
        })
    }


    render(){
        return(
            <div>
            <form>
                  <div className='form-group'>
                      <div className='row'>
                          <div className='col-md-4'>
                              <input className='form-control' type='text' placeholder='Title' name='title' onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-4'>
                              <input className='form-control' type='text' placeholder='Description' name='description'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="category">Category</label>
                        <select className="form-control" name='categoryId'onChange={this.handleInput.bind(this)}>
                            <option selected>Choose category</option>
                            <option value='1'>Marketing</option>
                            <option value='2'>IT</option>
                            <option value='3'>Language</option>
                        </select>
                     </div>
                      <div className='row'>
                          <div className='col-md-4'>
                              <input className='form-control' type='text' placeholder='Picture' name='photo'onChange={this.handleInput.bind(this)}/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-4'>
                            <button type="submit" className="btn btn-primary" onClick={this.handlSubmit.bind(this)}>Create course</button>
                          </div>
                      </div>
                  </div>
            </form>
        </div> 
        );
    }
}