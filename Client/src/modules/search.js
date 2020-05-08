import React  from 'react';
import {Link , NavLink} from 'react-router-dom';

export default class Search extends React.Component{
    constructor(props){
        super(props);
    }

    fetchData(){
        fetch(`http://localhost:8080/search/`, {
            method : 'GET'
        })
        .then(response =>{
            return response.text()
        }).then(data =>{
            console.log(json.parse(data));
        })
    }

    render(){
        return <div>Hi</div>
    }
}