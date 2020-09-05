import React from 'react';
import pranata from './pranata.png';
import pranataWhite from './pranata-wihite.png';

// TODOS: LOGO NAME ANIMATION...
export default function Logo({fill}) {
  return (
    <img
      width="120"
      height="50"
      fill={'primary'}
      src={fill === '#fff' ?pranataWhite : pranata}
      alt="celloworld"
    />
  );
}
