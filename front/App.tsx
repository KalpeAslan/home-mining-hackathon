/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react'
import {Router} from './src/routes/Router'
import {Provider as PaperProvider} from 'react-native-paper'
import {theme} from './src/styles/themes'
import {ThemeProvider} from '@emotion/react'
import {Provider} from 'react-redux'
import {store} from './src/store/store'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PaperProvider theme={theme}>
          <GestureHandlerRootView style={{flex: 1}}>
            <Router />
          </GestureHandlerRootView>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
