import React from 'react';

import Form from './home_components/form';
import FeatureCategory from './home_components/featureCategory';
import FeatureCourses from './home_components/featureCourses';
import FeatureTeachers from './home_components/featureTeachers';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <FeatureCategory/>
        )
    }
}