import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function BudetListItem() {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri:
              'https://www.nationaldebtrelief.com/wp-content/uploads/2018/03/free-budgeting-apps-1024x572.jpeg',
          }}
          style={styles.image}
        />
      </View>
      <View
        style={{
          width: '90%',
          position: 'relative',
          backgroundColor: 'white',
          marginLeft: 10,
          marginTop:10,
          justifyContent:"center",
          borderBottomWidth:2,
          borderBottomColor:"#f8f8f8"
        }}
      >
        <Text style={styles.title}>Quora</Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
        <Text style={styles.amount}>-$78</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: '8%',
    height: 70
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  date: {
    color: 'grey',
    fontWeight: '500',
    marginTop: 2,
    fontSize: 13,
  },
  amount: {
    position: 'absolute',
    right: 0,
    fontWeight:"500"
  },
});
