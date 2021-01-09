import * as React from 'react';
import { Text, View, Button } from 'react-native';
import ListItem from './listItem';

const Card = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ListItem price={25}/>
    </View>
  );
}

export default Card;
