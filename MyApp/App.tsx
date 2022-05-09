/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Router} from './src/routes/router';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './src/styles/theme';
import {DefaultLayout} from './src/layouts/DefaultLayout';

const App = () => {
  return (
    <PaperProvider theme={theme}>
        <Router />
    </PaperProvider>
  );
};

export default App;
