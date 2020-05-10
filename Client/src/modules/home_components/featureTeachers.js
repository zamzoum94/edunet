import React from 'react';
import {Link} from 'react-router-dom';


export default class FeatureTeachers extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            teachers:[]
        };
        this.fetchTeachers()
    }

    fetchTeachers(){
        fetch('http://localhost:8080/teachers', {
            method : 'GET'
        })
            .then(res =>{
                return res.text()
            })
            .then(data =>{

            this.setState({
                teachers : JSON.parse(data).slice(0,3).map((element, idx)=>{
                    const {id, first_name, last_name, photo, linkedIn} = element;
                    return {id, first_name, last_name, photo, linkedIn}
                })
            })
        })
    };

    render(){
        return(
            <div className="featureTeachers">
                <div className='row'>
                    {this.state.teachers.map((element, idx)=>{
                        return(
                            <div className='col-md-3 ml-5'>
                                <div className='card'>
                                    <img src={element.photo || 'https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png'} className='card-img-top'></img>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            {element.post + ', '+element.university}
                                        </div>
                                        <Link to={`/teacher/${element.id}`}><a href="" className="card-link">{element.first_name + ' '+ element.last_name}</a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}