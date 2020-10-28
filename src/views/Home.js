import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BudgetListItem from '../components/BudetListItem'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Total Balance</Text>
          <Text style={styles.balanceFigure}>$13,750</Text>
        </View>
        <View style={styles.incomeExpenses}>
          <TouchableOpacity style={styles.incomeExpensesItem}>
            <Text style={styles.incomeExpensesItemTitle}>Income</Text>
            <Text style={styles.incomeExpensesItemFigure}>$3,754</Text>
            <MaterialCommunityIcons
              name="arrow-bottom-left"
              size={13}
              color="green"
              style={styles.incomeExpensesItemArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.incomeExpensesItem,  marginLeft: 15 }}
          >
            <Text style={styles.incomeExpensesItemTitle}>Expenses</Text>
            <Text style={styles.incomeExpensesItemFigure}>$5,754</Text>
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={13}
              color="orange"
              style={styles.incomeExpensesItemArrow}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* flatlist... */}
      {/* <FlatList> */}
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />
          <BudgetListItem />

      {/* </FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  header: {
    backgroundColor: '#4441cd',
    height: '40%',
    width: '100%',
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center'
  },

  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  balanceFigure: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: '2%',
  },
  incomeExpenses: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '8%',
  },
  incomeExpensesItem: {
    backgroundColor: 'white',
    padding: 8,
    width: '30%',
    alignItems: 'center',
    borderRadius: 8,
    position: 'relative',
  },
  incomeExpensesItemArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  incomeExpensesItemTitle: { color: 'grey', fontWeight: '600' },
  incomeExpensesItemFigure: { fontSize: 18, fontWeight: '700' },
});
