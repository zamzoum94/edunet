import React from 'react';
import {Link} from 'react-router-dom';


export default class FeatureTeachers extends React.Component {
    


    render(){
        return(
            <div className="featureTeachers">
                <div className='row'>
                    <div className='col-md-3 offset-md-1'>
                        <div className='card'>
                            <img src='https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png' className='card-img-top'></img>
                            <div className='card-body'>
                                <div className='card-text'>
                                    Text goes here
                                </div>
                                <Link to={'/teacher/Johnsnow'}><a href="" className="card-link">Teacher link</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 offset-md-1'>
                        <div className='card'>
                            <img src='https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png' className='card-img-top'></img>
                            <div className='card-body'>
                                <div className='card-text'>
                                    Text goes here
                                </div>
                                <Link to='/teacher/BradPitt'><a href="" class="card-link">Teacher link</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 offset-md-1'>
                        <div className='card'>
                            <img src='https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png' className='card-img-top'></img>
                            <div className='card-body'>
                                <div className='card-text'>
                                    Text goes here
                                </div>
                                <Link to='/teacher/JohnCarter'><a href="#" class="card-link">Teacher link</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}