import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import RenderPhotos from './RenderPhotosComponent';

function Wildlife(props) {
  const photoList = <RenderPhotos photos={props.wildlife}
    isLoading={props.wildlifeLoading}
    errMess={props.wildlifeErrMess}/>;
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/photos">Photos</Link></BreadcrumbItem>
          <BreadcrumbItem active>Wildlife</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12">
          <ul>
            {photoList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wildlife;
