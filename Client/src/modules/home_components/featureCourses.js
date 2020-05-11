import React from 'react';
import {Link} from 'react-router-dom';


export default class FeatureCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            courses : []
        };
        this.fetchCourses()
    }

    fetchCourses(){
        fetch('http://localhost:8080/courses', {
            method : 'GET'
        })
            .then(res =>{
                return res.text()
            })
            .then(data =>{
            this.setState({
                courses : JSON.parse(data).map((element, idx)=>{
                    const {id, title, description} = element;
                    return {id, title, description}
                })
            })

        })
    };

    render(){
        return(
            <div className='featureCourses'>
                <div className="row">
                    {this.state.courses.slice(0,3).map((element, idx)=>{
                        return(
                            <div className="col-md-3 ml-5">
                                <Link to={`/course/${element.id}`}>
                                    <div className="card ">
                                        <img className ="card-img-top" src="https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{element.title}</h5>
                                            <p className="card-text">{element.description.substring(0,100)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}