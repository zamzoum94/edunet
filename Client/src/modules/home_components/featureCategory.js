import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureCategory extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="featureCategory">
            <div className='row'>
                <div className='col-md-2 categoryBorder'>
                    <Link to='searchByCategory/marketing'><h2> Marketing</h2></Link>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <Link  to='searchByCategory/language'><h2> Language</h2></Link>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <Link to='searchByCategory/it' ><h2> IT</h2></Link>
                </div>
            </div>
        </div>
        );
    }
}