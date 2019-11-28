import React from 'react';
import {Loading} from './LoadingComponent';
import {HomeCarousel} from './CarouselComponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';

function RenderCarousel({item, isLoading, errMess}) {
  if (isLoading) {
    return (
      <Loading />
    );
  } else if (errMess) {
    return (
      <h4>{errMess}</h4>
    );
  } else {
    return (
      <FadeTransform
        in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
        <HomeCarousel items={item}/>
      </FadeTransform>
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <RenderCarousel item={}
            isLoading={}
        </div>
      </div>
    </div>
  );
}