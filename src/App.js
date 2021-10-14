import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import RouteApp from './pages';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

const App = () => {
  return (
    <>
      <NavBar />
      <RouteApp />
      <Footer />
    </>
  );
};

export default App;
