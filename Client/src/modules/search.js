import React  from 'react';
import {Link , NavLink} from 'react-router-dom';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            target : props.match.params.value,
            data : null
        }
        this.fetchData()
    }

    fetchData(){
        fetch(`http://localhost:8080/courses/`, {
            method : 'GET'
        })
        .then(response =>{
            return response.text()
        }).then(data =>{
            this.setState({
                data : JSON.parse(data)
            })
        })
    }


    render(){
        return <div className='row'>
            {
            this.state.data === null ? '' : (this.state.data)
            .filter(element => element.title.toLowerCase().indexOf(this.state.target.toLowerCase()) !== -1)
            .map((element, index)=>{
                return(
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='card-title'>{element.title}</h4>
                                <p className='card-text'>{element.description}</p>
                                <Link to={`/course/${element.id}`}>
                                    <h4>Check Course</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    }
}