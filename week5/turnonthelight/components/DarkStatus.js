import React from 'react';
import { useSelector } from 'react-redux';

function DarkStatus() {
  const lightIsOn = useSelector((state) => state.dark.lightIsOn);

  return (
    <div>
      {lightIsOn ? <p style={{ color: 'black' }}>Light is on</p> : <p style={{ color: 'white' }}>Light is off</p>}
    </div>
  );
}

export default DarkStatus;
