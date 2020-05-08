import React from 'react';
import {Link} from 'react-router-dom';
let categories = ['Marketing', 'IT', 'Language']
export default class FeatureCategory extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="featureCategory">
            <div className='row'>
                    {categories.map((element, index) =>{
                        return(
                            <div className='col-md-2 categoryBorder'>
                            <Link to={'searchByCategory/'+ element}><h2> {element}</h2></Link>
                            </div>)
                    })}
            </div>
        </div>
        );
    }
}