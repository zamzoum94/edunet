import React from 'react';


export default class FeatureTeachers extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-3 offset-md-1'>
                        <div className='card'>
                            <img src='https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png' className='card-img-top'></img>
                            <div className='card-body'>
                                <div className='card-text'>
                                    Text goes here
                                </div>
                                <a href="#" class="card-link">Teacher link</a>
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
                                <a href="#" class="card-link">Teacher link</a>
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
                                <a href="#" class="card-link">Teacher link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}