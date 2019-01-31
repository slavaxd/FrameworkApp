import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default class Cart extends Component {
  state = {
    cartList: [
      { id: 0, name: 'Кальян', price: '150 грн', special: 'sweet' },
      { id: 1, name: 'Кальян', price: '150 грн', special: 'sweet' },
    ]
  }

  render() {
    const { cartList } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
        <View>
          <Text>NAV</Text>
        </View>
        <View>
          <Text style={styles.headerText}>Ваш список замовлення</Text>
        </View>
        <View style={styles.cartList}>
          {cartList.map((item) => 
          <View key={item.id} style={styles.cartItem}>
            <View style={styles.cartItemAmount}>
              <View style={styles.inc}>
                <Text>+</Text>
                <Text>-</Text>
              </View>
            </View>
            <View style={styles.itemPhoto}>
              {/* <Image style={styles.itemPhoto} source={require('../assets/images/hookaha.jpg')} /> */}
            </View>
            <View style={styles.itemData}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Text>{item.special}</Text>
            </View>
          </View>)}
        </View>
        <View style={styles.promocode}>
          <TextInput
            style={styles.input}
            placeholder="Промо код"
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity style={styles.apply} onPress={() => console.log('aaa')} activeOpacity={1}>
            <Text style={styles.buttonText}>Застосувати</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.total}>
          <View style={styles.cartListItem}>
            <Text>Загальний рахунок</Text>
            <Text>1000 грн</Text>
          </View>
          <View style={styles.cartListItem}>
            <Text>Знижка</Text>
            <Text>0 грн</Text>
          </View>
        </View> 
          <TouchableOpacity style={styles.proceed} onPress={() => console.log('aaa')} activeOpacity={1}>
            <Text style={styles.buttonText}>Перейти до оплати</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    paddingTop: 40,
  },
  headerText:{
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "900",
  },
  cartList: {
    display: 'flex',
    marginTop: 20,
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 100,
    marginBottom: 10,  
    padding: 12,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 10
  },
  cartItemAmount: {
    width: '12%',
    height: '100%',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    padding: 10,
  },
  inc: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },  
  itemPhoto: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8,
    borderRadius: 4,
    width: 70,
    height: 70
  },
  itemData: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginLeft: 20,
    height: 70
  },
  promocode: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 50,
    marginTop: 20,  
    padding: 2,
    paddingLeft: 10,
    paddingRight: 4,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
  },
  input: {
    width: '67%',
    height: '100%'
  },
  apply: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    height: 42,
    backgroundColor: '#56A6FD',
    borderRadius: 10
  },
  total: {
    display: 'flex',
    alignItems: 'flex-start',
    // justifyContent: '',
    flexDirection: 'column',
    marginTop: 30, 
    padding: 12,
    borderRadius: 10
  },
  cartListItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
  },
  proceed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    marginTop: 20,
    color: '#FFFFFF',
    backgroundColor: '#56A6FD',
    borderRadius: 10
  },
  buttonText: {
    color: '#FFFFFF',
  }
})
