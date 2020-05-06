import React  from 'react';
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
                        <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Teachers</a>
                        <a className="nav-item nav-link" href="#">Courses</a>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}