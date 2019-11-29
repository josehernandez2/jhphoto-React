import React from 'react';
import {Loading} from './LoadingComponent';
import {HomeCarousel} from './CarouselComponent';
import {FadeTransform} from 'react-animation-components';

function RenderCarousel({item, isLoading, errMess}) {
  if (isLoading) {
    return (
      <>
        <div className="col-4"></div>
        <Loading />
        <div className="col-4"></div>
      </>
    );
  } else if (errMess) {
    return (
      <h4>{errMess}</h4>
    );
  } else {
    return (
      <div className="col-12">
        <FadeTransform
          in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
          <HomeCarousel items={item}/>
        </FadeTransform>
      </div>
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <RenderCarousel item={props.items}
          isLoading={props.carouselLoading}
          errMes={props.carouselErrMess}/>
        <div className="col-12">
          <p>Photography takes an instant out of time,
             altering life by holding it still. Taking pictures is savoring life
              intensely, every hundredth of a second. The best thing about a
               picture is that it never changes, even when the people in it do.
                What I like about photographs is that they capture a moment
                 that's gone forever, impossible to reproduce.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
