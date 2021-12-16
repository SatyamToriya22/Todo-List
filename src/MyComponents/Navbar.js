import React from 'react'

export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'darkseagreen'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color:'black',fontWeight:'600'}}>Todo List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'black'}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={{color:'black',fontWeight:'600'}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" style={{color:'black',fontWeight:'600'}}>About</a>
                        </li>
                            
                    </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{color:'black',fontWeight:'600'}}/>
                                <button className="btn btn-outline-success" type="submit" style={{color:'black',fontWeight:'600'}}>Search</button>
                        </form>
                </div>
            </div>
        </nav>
    </>
}