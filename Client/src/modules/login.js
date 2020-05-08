import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="modal-body lbody">
                <form className="loginPage">
                    <div className="form-group form-group-lg">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
                    </div>
                    <div className="form-group form-group-lg">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                    </div>
                    <button  className="btn btn-success" id="logbtn">Login</button>
                </form>
            </div>
        )
    }
} 