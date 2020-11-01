import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BudgetListItem from '../components/BudetListItem';

const Spent = ({ navigation }) => {
  const filters = ['Day', 'Week', 'Month'];
  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-arrow-dropleft"
        size={30}
        color="#4441cd"
        style={styles.backArrow}
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={styles.title}>Expenses</Text>
      <View style={styles.summary}>
        <Text style={styles.amount}>$3,790</Text>
        <Text>/</Text>
        <Text style={styles.duration}>this month</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: '7%',
        }}
      >
        {filters.map((item) => (
          <TouchableOpacity
            style={{
              borderRadius: 15,
              backgroundColor: '#4441cd',
              padding: 8,
              alignItems: 'center',
              width: 100,
              marginRight: 10,
            }}
            key={item}
          >
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        {/* <TouchableOpacity
          style={{
            borderRadius: 15,
            backgroundColor: '#4441cd',
            padding: 8,
            alignItems: 'center',
            width: 100,
            marginRight: 10,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>
            Week
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={{
            borderRadius: 15,
            backgroundColor: '#4441cd',
            padding: 8,
            alignItems: 'center',
            width: 100,
            marginRight: 10,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>
            Month
          </Text>
        </TouchableOpacity> */}
      </View>
      <Text style={{ fontSize: 24, fontWeight: '600', marginTop: '4%' }}>
        Transactions
      </Text>
      <BudgetListItem />
      <BudgetListItem />
      <BudgetListItem />
      <BudgetListItem />
    </View>
  );
};

export default Spent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    paddingHorizontal: '6%',
    backgroundColor: '#fff',
  },
  backArrow: {
    position: 'absolute',
    top: '7%',
    left: '6%',
    zIndex: 3,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    marginTop: '6%',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
  amount: {
    fontSize: 30,
    fontWeight: '700',
  },
});
