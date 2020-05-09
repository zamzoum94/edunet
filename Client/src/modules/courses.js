
import React from 'react';
import {Link} from 'react-router-dom';
let id = 0;
let obj = {name : 'book', desciption:'hello', img : 'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg', id: ++id};
let arr = [], max = 10;
for(let i = 0; i < max; i++){
    arr.push(obj);
}


export default class Courses extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            output : null
        }
        this.fetchData();
    }  

    fetchData(){
        fetch(`http://localhost:8080/courses`, {
            method : 'GET'
        })
        .then(response =>{
            return response.text()
        }).then(data =>{
            console.log(data);
            this.setState({
                output : this.constructDiv(JSON.parse(data))
            })
        })
    }
        constructDiv(data){
            return(
                <div className='row'>
                    {
                    data.map((element, key)=>{
                        return(
                            <div className='col-md-4' key={key}>
                                <div className='card'>
                                    <img src={element.photo} className='card-img-top' alt='pic'></img>
                                    <div className='card-body'>
                                        <h3 className='card-title'>{element.title}</h3>
                                        <p className='card-text'>{element.description}</p>
                                    </div>
                                    <Link to={'/course/'+element.id}><button className='btn btn-success'>Check Course</button></Link>
                                </div>
                            </div>
                        )
                        })
                    }
                </div>
            )
        }
    render(){
        return(
            <div>
                {this.state.output}
            </div>
        )
    }
}