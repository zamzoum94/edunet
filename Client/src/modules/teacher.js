import React from 'react';


export default class Teacher extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <img className='card-img-top' src='https://p7.hiclipart.com/preview/345/892/994/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E5%BC%8F-middle-school-juku-%E6%95%B0%E5%AD%A6-lecturer-teacher-man.jpg'></img>
                        <div className='card-body'>
                            <h4 className='card-title'>Author name</h4>
                            <p className='card-text'>Auhtor desciption</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>Author Courses</h2>
                        </div>
                        <div className='col-md-6'>
                            <h2>Author courses rating</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}