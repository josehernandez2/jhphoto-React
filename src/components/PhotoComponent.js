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
      <div className="col-12 col-md m-1">
        <FadeTransform in
          transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
          <Card>
            <CardHeader
              className="text-center" tag="h3">{item.category}
            </CardHeader>
            <img width="100%"
              src={baseUrl + item.image} alt={item.description} />
            <CardBody className="text-center">
              <CardText>{item.quote}</CardText>
              <Link to={'/photos/${item.category}'}>
                <Button>See More</Button>
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
      <div className="row mb-5">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Photos</BreadcrumbItem>
        </Breadcrumb>
        <div className="row mt-5">
          <RenderCard item={props.portrait}
            cardIsLoading={props.portraitsLoading}
            errMess={props.portraitsErrMess} />
          <RenderCard item={props.landscape}
            cardIsLoading={props.landscapesLoading}
            errMess={props.landscapesErrMess} />
          <RenderCard item={props.wildlife}
            cardIsLoading={props.wildlifeLoading}
            errMess={props.wildlifeErrMess} />
        </div>
      </div>
    </div>
  );
};

export default Photos;
