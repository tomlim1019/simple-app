// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListComponent from './components/listcomponent';
import Card from './components/card';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={ListComponent} 
          options={{
            title: 'GONG CHA',
            headerStyle: {
              backgroundColor: '#962222',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Stack.Screen 
          name="Gift" 
          component={Card}
          options={{
            title: 'GIFT CARD',
            headerStyle: {
              backgroundColor: '#962222',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white'
            }
          }}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;