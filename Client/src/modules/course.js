import React from 'react';
import {Link} from 'react-router-dom';
export default class Course extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : props.match.params.id,
            data : null,
            courses : null,
            exist : null,
            upload : {
                title : null,
                description : null,
                url : null,
            },
            owner : false
        };
        this.fetchData();
    }

    fetchData(){
        fetch(`http://localhost:8080/courses/${this.state.id}`, {
            method : 'GET',
        })
        .then(response =>{
            return response.text()
        }).then(data =>{
            let curData = JSON.parse(data).course;
            console.log(curData)
            if(curData.teacherId == localStorage.getItem('id')){
                this.state.owner = true;
            } 
            this.setState({
                data : JSON.parse(data)
            });
        })
        .catch(err => {
            console.log(err);
        });

        if(localStorage.getItem('role') === 'student'){
            let curId = localStorage.getItem('id');
            console.log(curId)
            fetch(`http://localhost:8080/students/${curId}`, {
            type : 'GET',
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
            }).then(docs=>{
                return docs.text()
            })
            .then(data=>{
                let curData = JSON.parse(data).query;
                console.log(curData);
                let exist = false;
                for(let i = 0; i < curData.length && !exist; ++i){
                    if(curData[i].id == this.state.id){
                        exist = true;
                    }
                }
                this.setState({
                    courses : curData,
                    exist : exist
                })
            })
        }
    }

    enroll(){
        fetch(`http://localhost:8080/courses/${this.state.id}`,{
            method : 'POST',
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`,
                'Content-Type' : 'application/json'
            }
        })
        .then(response=>{
            return response.text()
        })  
        .then(docs=>{

        })
        .catch(err=>{
            console.log('error',err)
        })
        this.setState({
            exist : true
        })
    }

    handleInput(event){
        let key = event.target.name;
        let value = event.target.value;
        this.state.upload[key] = value;
    }

    handleSubmit(){
        this.state.upload.url = 'https://www.youtube.com/embed/'+ this.state.upload.url;
        document.getElementById('title').value = '';
        document.getElementById('desc').value = '';
        document.getElementById('url').value = '';       
        fetch(`http://localhost:8080/video/${this.state.id}`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state.upload),
        })
        .then(response=> {
            this.fetchData();
            alert('video have been added')
        })
        .catch(err=>{
            console.log('error', err)
        })
    }

    render(){
        return(
            <div>
                {localStorage.getItem('token') === null ? '' 
                : localStorage.getItem('role') === 'teacher' ? ''
                : this.state.exist === true ? 
                <div className='row'>
                    <div className='col-md-2'>
                        <button className='btn btn-warning mb-3' disabled>Enrolled</button>
                    </div>
                </div>
                :<div className='row'>
                    <div className='col-md-2 mb-3'>
                        <button className='btn btn-success' onClick={this.enroll.bind(this)}>Enroll</button>
                    </div>
                </div>
                }
                <div>
                    <ul className="nav nav-tabs mb-5">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#description">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#teacher">Teacher</a>
                        </li>
                        {localStorage.getItem('token') === null ? '' :
                         this.state.exist === false ? '': 
                         localStorage.getItem('role') === 'teacher' && this.state.owner === false ?  '': 
                         <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#content">Content</a>
                        </li>
                        }
                        </ul>
                        
                        <div className="tab-content">
                        <div className="tab-pane container active" id="description">
                            <div className="card">
                                <img src={this.state.data === null ? '' : this.state.data.course.photo} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.data !== null ? this.state.data.course.title: ''}</h5>
                                    <p className="card-text">{this.state.data !== null ? this.state.data.course.description: ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="teacher">
                            <div className="card">
                                <img src={this.state.data !== null ? this.state.data.teacher.photo : ''} className="card-img-top rounded-circle" alt="..."></img>
                                <div className="card-body">
                                    <Link to={`/teacher/${this.state.data !== null ? this.state.data.teacher.id : ''}`}>
                                        <h5 className="card-title">
                                            {this.state.data !== null ? (this.state.data.teacher.first_name + ' '+ this.state.data.teacher.last_name) : ''}
                                        </h5>
                                    </Link>
                                    <p className="card-text">{this.state.data !== null ? this.state.data.teacher.email : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="content">
                            {
                                localStorage.getItem('role') === 'student' ? '' :
                                <div className='form-group'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <h2>Add video</h2>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <input type='text' className='form-control mb-2' placeholder='Title' name='title' id='title' onChange={this.handleInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <input type='text-area' className='form-control mb-2' placeholder='description' id='desc' name='description' onChange={this.handleInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <input type='text' className='form-control mb-2' placeholder='URL' name='url' id='url' onChange={this.handleInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4 mb-5'>
                                            <button className='btn btn-success' onClick={this.handleSubmit.bind(this)}>Upload</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className='row'>
                                {this.state.data === null ? '': this.state.data.video.map((element, key)=>{
                                    return(
                                        <div className='col-md-6 mb-3' key={key}>
                                            <iframe width="420" height="345" src={element.url}>
                                            </iframe>
                                                <h4 className='h4'>{element.title}</h4>
                                                <p className='font-weight-light'>{element.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}