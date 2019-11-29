import React from 'react';

export const Loading = () => {
  return (
    <>
      <div className="col-4"></div>
      <div className="col-4 m-5">
        <span
          className="fa fa-circle-o-notch fa-spin fa-3x fa-fw text-primary">
        </span>
      </div>
      <div className="col-4"></div>
    </>
  );
};
