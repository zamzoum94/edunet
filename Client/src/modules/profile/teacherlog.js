import React from 'react';
import {Link} from 'react-router-dom';

export default class TeacherLog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : props.match.params.id,
            output : null
        }
        this.fetchData()
    }


    fetchData(){
        fetch(`http://localhost:8080/teachers/${this.state.id}`, {
            type : 'GET',
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(docs=>{
            return docs.json()
        })
        .then(data=>{
            this.setState({
                output : data
            })
        }).catch(err=>{
            window.location.href = 'http://localhost:3000'
        })
    }

    render(){
        return(
            <div>
                <div className='row mb-5'>
                    <div className='col-md-3'>
                        <Link to={'/createcourse/' + this.state.id}><button className='btn btn-success btn-lg'>Create a course</button></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <img className='card-img-top' src={this.state.output === null ? '' : this.state.output.teacher.photo}></img>
                            <div className='card-body'>
                                <h4 className='card-title'>{this.state.output === null ? '' : this.state.output.teacher.first_name +' ' +this.state.output.teacher.last_name}</h4>
                                <p className='card-text'>{this.state.output === null ? '' : this.state.output.teacher.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>Teacher Courses</h2>
                                {this.state.output === null ? '' : this.state.output.course.map((element, key)=>{
                                    return(
                                        <div className='row' key={key}>
                                            <div className='col-md'>
                                                <Link to={`/course/${element.id}`}><h2>{element.title}</h2></Link>
                                            </div>
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