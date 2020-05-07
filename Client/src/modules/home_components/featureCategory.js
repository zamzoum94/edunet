import React from 'react';


export default class FeatureCategory extends React.Component {
    


    render(){
        return(
        <div className="featureCategory">
            <div className='row'>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
                <div className='col-md-2 categoryBorder'>
                    <h2> Category goes here</h2>
                </div>
            </div>
        </div>
        );
    }
}