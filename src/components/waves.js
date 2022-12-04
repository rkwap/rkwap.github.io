import * as React from 'react';

function WavesSvg(props) {
  return (
    <svg
      style={{
        transition: '.3s',
      }}
      viewBox="0 0 1440 170"
      xmlns="http://www.w3.org/2000/svg"
      {...props}></svg>
  );
}

export default WavesSvg;
