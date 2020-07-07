import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './routes/index';
import store from './components/store';

    const App = () => {

      console.disableYellowBox = true;

    return(
     // <Provider store={store}>
            <Navigator />
       // </Provider>
    );

    };
  
  export default App;
