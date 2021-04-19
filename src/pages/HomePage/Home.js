import React from 'react';
import homeObjs from './Data';
import { InfoSection } from '../../components';

const Home = () => {
  return (
    <>
      {homeObjs.map((obj) => {
        return <InfoSection {...obj} />;
      })}
    </>
  );
};

export default Home;
