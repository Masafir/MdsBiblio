import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Home from './components/Home';
import Login from './components/Login';
import Library from './components/Library';
import BookForm from './components/BookForm';
import createStore from './Stores/store';
import Scanner from './components/Scanner';
import Profile from './components/Profile';

const Stack = createStackNavigator();
const { store, persistor } = createStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Accueil' }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Library" component={Library} />
            <Stack.Screen name="BookForm" component={BookForm} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;