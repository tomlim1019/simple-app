import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListComponent = ({ price }) => {
  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('Gift')}
    >
      <View style={styles.item}>
        <View style={styles.details}>
          <View style={styles.logo}>
            <Image 
              style={styles.image}
              source={{uri: 'https://cpb-us-w2.wpmucdn.com/blog.nus.edu.sg/dist/d/3617/files/2019/02/gongcha-logo-tjm9bc.jpg'}}
            />
          </View>
          <View style={styles.price}>
            <Text style={styles.text}>
              RM {price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 15,
    marginHorizontal: 15,
    width: 300,
    height: 100,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white'
  },
  details: {
    flex: 1,
    flexDirection: 'row'
  },
  logo: {
    flex: 3
  },
  price: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  text: {
    fontSize: 30,
    color: '#A03534',
    fontWeight: 'bold'
  }
})

export default ListComponent;