import React  from 'react';
import {Link , NavLink} from 'react-router-dom';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        console.log(props.match.params.value);
    }
    render(){
        return <div>Hi</div>
    }
}