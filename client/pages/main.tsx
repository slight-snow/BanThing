import styled from 'styled-components';
import Head from 'next/head';
import Script from 'next/script';
import { NextPage } from 'next';
import Map from '../components/main/map';
import Sidebar from '../components/main/sidebar';
import { useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}
const Container = styled.div`
  padding-top: 4.6vw;
  display: flex;
  flex-direction: row;
  width: 100;
  height: 100vh;
`;

const Main: NextPage = () => {
  const [location, setLocation] = useState<number[]>([]);
  return (
    <>
      <Head>
        <title>BanThing</title>
        <meta name="BanThing" content="Order with your foodmate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://kit.fontawesome.com/026077c6cc.js"
        crossOrigin="anonymous"
      ></Script>
      <Container>
        <Map setLocation={setLocation} />
        <Sidebar location={location} />
      </Container>
    </>
  );
};
export default Main;
