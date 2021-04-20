import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNav from './StackNavigations';
import {getLocalDB} from '../utils/localDB';

const App = () => {
  const [loginDetails, setLoginDetails] = React.useState(null);

  React.useEffect(() => {
    const getLoginDetails = async () => {
      const loginDetails = await getLocalDB('@loginDetails');
      setLoginDetails(loginDetails);
    };
    getLoginDetails();
  }, []);
  return (
    <NavigationContainer>
      <StackNav isLoggedIn={loginDetails !== null ? true : false} />
    </NavigationContainer>
  );
};

export default App;
