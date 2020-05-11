import React from 'react';
import {Link} from 'react-router-dom';
export default class FeatureCategory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            categories : []
        };
        this.fetchCategories();
    }

    fetchCategories(){
        fetch('http://localhost:8080/category', {
            method : 'GET'
        })
            .then(res =>{
                return res.text()
            })
            .then(data =>{
            this.setState({
                categories : JSON.parse(data).map((element, idx) =>{
                    return element.name;
                })
            })

        })
    }

    render(){
        return(
        <div className="featureCategory">
            <div className='row'>
            
                {this.state.categories.map((element,idx) =>{
                    
                    return(
                        <div className="col-md-3 ml-5">
                            <div className="card">
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2Kf_HD8Oox48wVEUn9Krt7w_gs5PIj1vXj9IR_-26MVbjDP-Y&usqp=CAU"></img>
                                <div className="card-body">
                                    <div className='col-md-12 categoryBorder'>
                            
                                        <Link style={{ textDecoration: 'none' }} to={'searchbycategory/'+(idx+1)}><h4 className="card-title">{element}</h4></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    )
                })
                }
                
            </div>
        </div>
        );
    }
}