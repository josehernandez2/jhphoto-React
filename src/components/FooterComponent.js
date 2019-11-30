import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <hr/>
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
              <a className="btn btn-social-icon btn-twitter m-2"
                href="https://twitter.com/JoseHernandezI6">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-social-icon btn-linkedin m-2"
                href="https://www.linkedin.com/in/jose-hernandez-ii/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a className="btn btn-social-icon btn-flickr m-2"
                href="https://www.flickr.com/photos/151337224@N02/">
                <i className="fa fa-flickr"></i>
              </a>
              <a className="btn btn-social-icon btn-github m-2"
                href="https://github.com/josehernandez2">
                <i className="fa fa-github"></i>
              </a>
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

export default Footer;
