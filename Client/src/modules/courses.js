
import React from 'react';

let obj = {name : 'book', desciption:'hello', img : 'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg'};
let arr = [], max = 10;
for(let i = 0; i < max; i++){
    arr.push(obj);
}


export default class Courses extends React.Component{
    

    render(){
        return(
            <div>
                <div className='row'>
                    {arr.map((element, index)=>{
                        return (
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img src={element.img} className='card-img-top' alt='cat'></img>
                                    <div className='card-body'>
                                        <h4 className='card-title'>
                                            {element.name}
                                        </h4>
                                        <p className='card-text'>
                                            {element.desciption}
                                        </p>
                                        <button type='submit' className='btn btn-primary'>Check course</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}