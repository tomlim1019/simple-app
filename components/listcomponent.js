import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListItem from './listItem';

const ListComponent = () => {
  return (
    <View style={styles.list}>
      <ListItem price={25} />
      <ListItem price={50} />
      <ListItem price={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    backgroundColor: '#EBE1E1'
  }
})

export default ListComponent;