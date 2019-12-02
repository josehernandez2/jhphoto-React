import React from 'react';
import {BreadcrumbItem, Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';

function About() {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>About</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src='images/self.jpg'
            alt="Jose Hernandez"
            className="img-fluid"/>
        </div>
        <div className="col-12 mt-5 pl-4 pr-4 col-md-6 pl-md-5 pr-md-0 mt-md-0">
          <p>Hello! My name is Jose Hernandez II and welcome to my online
             portfolio. I've been a practicing freelance photographer in the
             Eastern Nebraska area for about half a decade now.</p>
          <p>I've studied photo composition under
            <a href="https://www.lynda.com/Ben-Long/748177-1.html"> Ben Long's courses</a> on Lynda.com, where I
             learned how to work with a number of compositional elements and
             rules. I learned posing techniques from photographer, author,
             and educator
            <a href="https://www.robertovalenzuela.com/"> Roberto Valenzuela</a>. I have also studied photo
             processing techniques from
            <a href="https://www.lynda.com/Timothy-Sexton/1131948-1.html"> Timothy Sexton</a> and
            <a href="https://www.lynda.com/Chris-Orwig/43-1.html"> Chris Orwig</a>.
              You can view some of the credentials I recieved through
             Linkedin Learning and Lynda.com on my
            <a href="https://www.linkedin.com/in/jose-hernandez-ii/"> Linkedin Profile</a>. I shoot
             with a Canon 6d and process my photos with Photoshop.</p>
          <p>I have also been studying web development through Coursera
             and The Hong Kong
             University of Science and Technology, which is why I designed and
             developed this website. Feel free to email me with any questions,
             or you can head over to the contact page and send me a message
             through there.</p>
          <p>For info about my process and pricing, email me at:</p>
          <p><a href="mailto:info@josehernandez2.com">info@josehernandez2.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
