import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLight } from '../reducers/dark';

function LightSwitch() {
  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    dispatch(toggleLight());
  };

  return (
    <div>
      <label htmlFor="switch">Switch</label>
      <input type="checkbox" id="switch" onChange={handleSwitchChange} />
    </div>
  );
}

export default LightSwitch;
