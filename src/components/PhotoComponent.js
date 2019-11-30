/* eslint-disable react/prop-types */
import React from 'react';
import {Card, CardHeader, CardBody, CardText,
  Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Loading} from './LoadingComponent';
import {Link} from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';

function RenderCard({item, cardIsLoading, errMess}) {
  if (cardIsLoading) {
    return (
      <Loading />
    );
  } else if (errMess) {
    return (
      <h4>{errMess}</h4>
    );
  } else {
    return (
      <div className="col-12 col-md m-2">
        <FadeTransform in
          transformProps={{exitTransform: 'scale(0.0) translateY(-50%)'}}>
          <Card className="card">
            <CardHeader
              className="text-center card-header"
              tag="h3">{item.category}
            </CardHeader>
            <img
              width="100%"
              src={baseUrl + item.image}
              alt={item.description} />
            <CardBody className="text-center card-body">
              <CardText className="card-text">{item.quote}</CardText>
              <Link to={'/photos/' + item.category}>
                <Button className="button">See More</Button>
              </Link>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
  }
}

function Photos(props) {
  return (
    <div className="container">
      <div className="row mb-4">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Photos</BreadcrumbItem>
        </Breadcrumb>
        <div className="row mt-5">
          <RenderCard
            item={props.portraitFeatured}
            cardIsLoading={props.portraitsLoading}
            errMess={props.portraitsErrMess} />
          <RenderCard
            item={props.landscapeFeatured}
            cardIsLoading={props.landscapesLoading}
            errMess={props.landscapesErrMess} />
          <RenderCard
            item={props.wildlifeFeatured}
            cardIsLoading={props.wildlifeLoading}
            errMess={props.wildlifeErrMess} />
        </div>
      </div>
    </div>
  );
};

export default Photos;
