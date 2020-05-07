import React from 'react';

import Form from './home_components/featureForm';
import FeatureCategory from './home_components/featureCategory';
import FeatureCourses from './home_components/featureCourses';
import FeatureTeachers from './home_components/featureTeachers';
import ChooseUs from'./home_components/featureChoose';


export default class Home extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            
            <Form/>
            <FeatureTeachers/>
            <FeatureCourses/>
            <FeatureCategory/>
            <ChooseUs/>
            </div>
        )
    }
}