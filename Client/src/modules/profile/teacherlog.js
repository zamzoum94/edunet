import React from 'react';
import {Link} from 'react-router-dom';

export default class TeacherLog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='row mb-5'>
                    <div className='col-md-4'>
                        <input type='text' name='create_course' placeholder='create course' className='form-control'/>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/createcourse'><button className='btn btn-success btn-lg'>Create a course</button></Link>
                    </div>
                </div>
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
                            </div>
                            <div className='col-md-6'>
                                <h2>Teacher courses rating</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}