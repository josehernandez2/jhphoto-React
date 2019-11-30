import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import RenderPhotos from './RenderPhotosComponent';

function Portraits(props) {
  const photoList = <RenderPhotos photos={props.portraits}
    isLoading={props.portraitsLoading}
    errMess={props.portraitsErrMess}/>;
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/photos">Photos</Link></BreadcrumbItem>
          <BreadcrumbItem active>Portraits</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12">
          {photoList}
        </div>
      </div>
    </div>
  );
}

export default Portraits;
