import React from 'react';
import { AppProps } from 'next/app';
import { StateMachineProvider, createStore } from 'little-state-machine';
import dynamic from 'next/dynamic';

import '../styles/index.css'; // <- applied everywhere in the NextJS application scope
const Devtool = dynamic(() => import('components/lsm-devtool/little-machine-devtool'), { ssr: false });
//DevTool is optional

createStore({}); // Empty store

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StateMachineProvider>
      <Devtool />
      <Component {...pageProps} />
    </StateMachineProvider>
  );
};

export default MyApp;
