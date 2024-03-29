import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import RenderPhotos from './RenderPhotosComponent';

function Landscapes(props) {
  const photoList = <RenderPhotos photos={props.landscapes}
    isLoading={props.landscapesLoading}
    errMess={props.landscapesErrMess}/>;
  return (
    <div className="container photo-container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/photos">Photos</Link></BreadcrumbItem>
          <BreadcrumbItem active>Landscapes</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="hidden">(Click Photo For Details)</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {photoList}
        </div>
      </div>
    </div>
  );
}

export default Landscapes;
