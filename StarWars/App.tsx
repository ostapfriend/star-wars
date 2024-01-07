import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator.tsx';
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App;
