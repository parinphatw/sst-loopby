import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import NavBar from './Components/NavBar/NavBar';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

const App = () => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default App;
