import React from 'react';
import {Link} from "react-router-dom"
let obj ={name :'book',desciption:'hello', img : 'https://w0.pngwave.com/png/345/892/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E5%BC%8F-middle-school-juku-%E6%95%B0%E5%AD%A6-lecturer-teacher-man-png-clip-art.png'}

let arr = [], max = 10;
for(let i = 0; i < max; i++){
    arr.push(obj);
}

export default class Teachers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : null
        }
        this.fetchData();
    }

    fetchData(){
        fetch(`http://localhost:8080/teachers`, {
            method : 'GET'
        })
        .then(response =>{
            return response.text()
        }).then(data =>{
            this.setState({
                data : JSON.parse(data)
            })
            console.log(JSON.parse(data))
        })
    }

    render(){
        return(
            <div>
                <div className='row'>
                    {this.state.data === null ?  '' : this.state.data.map((element, index)=>{
                        return (
                            <div className='col-md-4' key={index}>
                                <div className='card'>
                                    <img src={element.photo} className='card-img-top' alt='cat'></img>
                                    <div className='card-body'>
                                        <h4 className='card-title'>
                                            {element.first_name+' '+element.last_name}
                                        </h4>
                                        <p className='card-text'>
                                            {element.email}
                                        </p>
                                        <Link to={`/teacher/${element.id}`}><button type='submit' className='btn btn-primary'>Check profil</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}