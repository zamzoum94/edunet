import React from 'react';
import {Link} from 'react-router-dom';


export default class FeatureCourses extends React.Component {
    


    render(){
        return(
            <div className='featureCourses'>
                <div className="row">
                    <div className="col-md-3">
                        <Link to={'/course' + '/4'}>
                            <div className="card">
                                <img className ="card-img-top" src="https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"></img>
                                <div className="card-body">
                                    <h5 className="card-title">title goes here</h5>
                                    <p className="card-text">decription goes here</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/course' + '/4'}>
                            <div className="card">
                                <img className ="card-img-top" src="https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"></img>
                                <div className="card-body">
                                    <h5 className="card-title">title goes here</h5>
                                    <p className="card-text">decription goes here</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/course' + '/4'}>
                            <div className="card">
                                <img className ="card-img-top" src="https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"></img>
                                <div className="card-body">
                                    <h5 className="card-title">title goes here</h5>
                                    <p className="card-text">decription goes here</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/course' + '/4'}>
                            <div className="card">
                                <img className ="card-img-top" src="https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"></img>
                                <div className="card-body">
                                    <h5 className="card-title">title goes here</h5>
                                    <p className="card-text">decription goes here</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}