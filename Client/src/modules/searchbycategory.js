import React  from 'react';
import {Link , NavLink} from 'react-router-dom';

export default class SearchByCategory extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            category : props.match.params.category, 
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
            this.setState({
                output : this.constructDiv(JSON.parse(data))
            })
        })
    }

    filterData(data){
        let answer = [];
        for(let i = 0; i < data.length; ++i){
            if(data[i].categoryId == this.state.category){
                answer.push(data[i]);
            }
        }
        return answer;
    }

    constructDiv(data){
        data = this.filterData(data);
        return(
            <div className='row'>
                {data.map((element, key)=>{
                    return(
                        <div className='col-md-4' key={key}>
                            <Link to={'/course/' + element.id}>    
                                <h2>{element.title}</h2>
                            </Link>
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