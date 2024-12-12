import React from 'react';
import './Banner.css';

function Banner({ imgbanner }) { // Extraemos imgbanner de las props
  return (
    <div className='banner'>
      <img src={imgbanner} alt="banner" />
    </div>
  );
}

export default Banner;
