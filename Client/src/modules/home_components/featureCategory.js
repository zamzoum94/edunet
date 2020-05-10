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
                        <div className='col-md-2 categoryBorder'>
                            <Link to={'searchbycategory/'+(idx+1)}><h2>{element}</h2></Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
        );
    }
}