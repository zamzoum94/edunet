import React from 'react';
import {Link} from 'react-router-dom';

let courses = [{name : 'Mekla', id:0}, {name : 'Noum', id:1}]


export default class Teacher extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    componentWillReceiveProps(props){
        this.state = ({
            id : props.match.params.id
        })
    }


    render(){
        return(
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <img className='card-img-top' src='https://p7.hiclipart.com/preview/345/892/994/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E5%BC%8F-middle-school-juku-%E6%95%B0%E5%AD%A6-lecturer-teacher-man.jpg'></img>
                        <div className='card-body'>
                            <h4 className='card-title'>Teacher name</h4>
                            <p className='card-text'>Teacher desciption</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>Teacher Courses</h2>
                            {courses.map((element, index)=>{
                                return(
                                    <div className='row' key ={index}>
                                        <div className='col-md'>
                                            <Link to={'/course/'+element.id}><h4>{element.name}</h4></Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}