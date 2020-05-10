import React from 'react';
import {Link} from 'react-router-dom';

export default class StudentProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : props.match.params.id,
            output : null
        }
        this.fetchData()
    }

    fetchData(){
        console.log(this.state.id)
        fetch(`http://localhost:8080/students/${this.state.id}`, {
            type : 'GET',
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(docs=>{
            return docs.text()
        })
        .then(data=>{
            console.log(JSON.parse(data))
            this.setState({
                output : JSON.parse(data)
            })
        }).catch(err=>{
            //window.location.href = 'http://localhost:3000'
        })
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <img className='card-img-top' src={this.state.output === null ? '' : this.state.output.student.photo}></img>
                            <div className='card-body'>
                                <h4 className='card-title'>{this.state.output === null ? '' : this.state.output.student.first_name +' ' +this.state.output.student.last_name}</h4>
                                <p className='card-text'>{this.state.output === null ? '' : this.state.output.student.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>Student Courses</h2>
                                {this.state.output === null ? '': 
                                    this.state.output.query.map((element, index)=>{
                                        return(
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <Link to={'/course/'+element.id}>
                                                        {element.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}