import React, {useState} from 'react';
import {Collapse} from 'reactstrap';
import {Loading} from './LoadingComponent';
import {Fade, Stagger} from 'react-animation-components';
import {baseUrl} from '../shared/baseUrl';

const RenderPhotos = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if (props.isLoading) {
    return (
      <Loading />
    );
  } else if (props.errMess) {
    return (
      <h4>{props.errMess}</h4>
    );
  } else {
    return (
      <Stagger delay={500} in>
        {props.photos.map((photos) => {
          return (
            <Fade key={photos.id} in>
              <img
                className="img-fluid"
                src={baseUrl + photos.image}
                alt={photos.name}
                onClick={toggle} />
              <Collapse isOpen={isOpen}>
                <div className="mt-2 mb-5">
                  <h2>{photos.name}</h2>
                  <p className="p-photos">{photos.description}</p>
                </div>
              </Collapse>
            </Fade>
          );
        })}
      </Stagger>
    );
  }
};

export default RenderPhotos;
