import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
  return(
    <div className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className="col-6">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/photos">Photos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="col-6 align-self-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2019 Jose Hernandez II</p>
          </div>
        </div>
      </div>
    </div>
  );
}