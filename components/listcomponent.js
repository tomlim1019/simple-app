import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListItem from './listItem';

const ListComponent = ({ navigation }) => {
  const navigate = () => {navigation.navigate('Gift')}
  return (
    <View style={styles.list}>
      <ListItem price={25} navigation={navigate} />
      <ListItem price={50} navigation={navigate} />
      <ListItem price={100} navigation={navigate} />
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