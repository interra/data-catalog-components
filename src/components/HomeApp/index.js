import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import HomePage from '../HomePage';

import Header from '../Header';
import Footer from '../Footer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function HomeApp() {

    var homePageIcons = [{"identifier": "ONE"}, {"identifier": "TWO"}, {"identifier": "THREE"}];

    return (
    <AppWrapper>
      <Helmet
        defaultTitle="DKAN"
      >
        <meta name="description" content="DKAN" />
      </Helmet>
      <Header />
      <HomePage homePageIcons={homePageIcons} />
      <Footer />
    </AppWrapper>
  );
}
