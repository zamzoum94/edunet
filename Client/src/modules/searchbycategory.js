import React  from 'react';
import {Link , NavLink} from 'react-router-dom';

export default class SearchByCategory extends React.Component{
    constructor(props){
        super(props);
        
        this.category = props.match.params.category;
        this.state ={
            output : null
        }
        this.fetchData();
    }


    fetchData(){
        fetch(`http://localhost:8080/category/${this.category}`, {
            method : 'GET'
        })
        .then(response =>{
            return response.text()
        }).then(data =>{
            this.setState({
                output : this.constructDiv(JSON.parse(data))
            })
        })
    }

    constructDiv(data){
        return(
            <div className='row'>
                {data.map((element, key)=>{
                    return(
                        <div className='col-md-4' key={key}>
                            <h2>{element.title}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
    
    render(){
        return (
        <div>
            {this.state.output}
        </div>
        )
    }
}