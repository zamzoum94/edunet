import React  from 'react';
import {Link , NavLink} from 'react-router-dom';
import Login from './login';
import Register from './register';
export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login : props.login,
            id : 'option1',
            target : '/search/',
            value : '',
            user : props.user
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            user : nextProps.user
        })
    }

    // Function switch betwen register and login

    handleInput(event){
        let target = event.target.name;
        this.state[target] = event.target.value;
        this.setState({
            target : '/search/' + event.target.value
        })
    }

    popout(event){
        let id = event.target.id;
        this.setState({
            id : id
        });
    }

    render(){
        return(
            <div className='mb-5'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">Edunet</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/teachers">Teachers</Link>
                            <Link className="nav-item nav-link" to="/Courses">Courses</Link>
                        </div>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" name = 'search' aria-label="Search" onChange={this.handleInput.bind(this)}/>
                        <Link to={this.state.target}><button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button></Link>
                    </form>
                    {this.state.user.auth === false ? 
                        <button href="#" data-target="#SignIn" data-toggle="modal" className="btn btn-outline-warning my-2 my-sm-0 ml-3">Your Account</button>
                        :<div>
                        <Link to={this.state.user.role === 'teacher' ? `/teacherprofile/${this.state.user.id}` : `/studentprofile/${this.state.user.id}`}>
                            <button className='btn btn-outline-warning my-2 my-sm-0 ml-3'>Profile</button>
                        </Link>
                            <button className='btn btn-outline-warning my-2 my-sm-0 ml-3' onClick={this.props.logout.bind(this)}>Logout</button>
                        </div>
                    }
                        
                </nav>
                
                <div className="modal fade" id="SignIn">
                    <div className="modal-dialog">
                        <div className="modal-content modlog">
                            <div className="modal-header">
                                <h1 className="modal-title">Account</h1>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className='container'>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-secondary active" >
                                        <input type="radio" name="options" id="option1" onClick={this.popout.bind(this)} checked/> Login
                                    </label>
                                    <label className="btn btn-secondary">
                                        <input type="radio" name="options" onClick={this.popout.bind(this)} id="option2" /> Register
                                    </label>
                                </div>
                                {
                                    this.state.id === 'option1' ? <Login user={this.props.login.bind(this)}/> : <Register/>
                                }
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            
        )
    }
}