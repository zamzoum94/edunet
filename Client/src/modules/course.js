import React from 'react';

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
}

export default class Course extends React.Component{
    constructor(props){
        super(props);
        this.state.id = props.match.params.id;
    }

    fetchData(){
        fetch(`http://localhost:8080/courses/${this.state.id}`, {
            method : 'GET'
        })
        .then(response =>{
            return response.text()
        }).then(data =>{
            console.log(data);
        })
    }

    render(){
        return(
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
                            <img src={obj.description.img} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{obj.description.title}</h5>
                                <p className="card-text">{obj.description.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="teacher">
                        <div className="card">
                            <img src={obj.Teacher.image} className="card-img-top rounded-circle" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{obj.Teacher.name}</h5>
                                <p className="card-text">{obj.description.email}</p>
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
        )
    }
}