import React from 'react';
import {Link} from 'react-router-dom';

let obj = {
    description : {
        title : 'This is a title',
        img : 'https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg',
        description : 'This is a description'
    },
    Teacher : {
        name : 'Teacher Name',
        image : 'https://p7.hiclipart.com/preview/345/892/994/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E5%BC%8F-middle-school-juku-%E6%95%B0%E5%AD%A6-lecturer-teacher-man.jpg',
        email : 'email'
    },
    Content : [
        'https://www.youtube.com/embed/E69MxcLhbuA',
        'https://www.youtube.com/embed/3q0lhRD5PRY',
        'https://www.youtube.com/embed/UrMUwShNqhU'
    ]
};

export default class Course extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : props.match.params.id,
            data : null
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
            this.setState({
                data : JSON.parse(data)
            })
            console.log(JSON.parse(data))    
        })
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
            console.log(response)
            return response.text()
        })  
        .then(docs=>{
        })
        .catch(err=>{
            console.log('error',err)
        })
    }

    render(){
        return(
            <div>
                {localStorage.getItem('token') === null ? '' :

                <div className='row'>
                    <div className='col-md-2'>
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
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#content">Content</a>
                        </li>
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
                            <div className='row'>
                                {obj.Content.map((element, key)=>{
                                    return(
                                        <div className='col-md-12 mb-3' key={key}>
                                            <iframe width="420" height="345" src={element}>
                                            </iframe>
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