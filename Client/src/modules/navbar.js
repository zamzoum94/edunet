import React  from 'react';
import {Link , NavLink} from 'react-router-dom';
export default class Navbar extends React.Component{
    render(){
        return(
            <div className='mb-5'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Edunet</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/teachers">Teachers</Link>
                            <Link className="nav-item nav-link" to="/Courses">Courses</Link>
                        </div>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <Link to= "/search"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                    </form>
                </nav>
            </div>
        )
    }
}