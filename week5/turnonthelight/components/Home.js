import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import DarkStatus from './DarkStatus';
import styles from '../styles/Home.module.css';
import { useDispatch } from 'react-redux';
import { toggleLight } from '../reducers/dark';

function Home() {
  const lightIsOn = useSelector((state) => state.dark.lightIsOn);
  const dispatch = useDispatch();

  const handleSwitchClick = () => {
    dispatch(toggleLight());
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: lightIsOn ? 'white' : 'black',
      }}
    >
      <Image
        src="/light.png"
        alt="Light"
        width={128}
        height={128}
        id="switch"
        className={styles.switch}
        onClick={handleSwitchClick}
      />
      <DarkStatus />
    </div>
  );
}

export default Home;
