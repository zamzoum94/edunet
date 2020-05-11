import React from 'react';


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
                  
              <video id="videoBG"  autoPlay muted  loop
              src="./style/vid1.mp4" type="video/mp4"/>
              <div className="content"><h1>Edunet</h1></div>
                <FeatureTeachers/>
                <FeatureCourses/>
                <FeatureCategory/>
                <ChooseUs/>
            </div>
        )
    }
}