import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../redux/store";
import CartProduct from "../../components/cart/cartProduct";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartBottomComponent from "../../components/cart/cartBottomComponent";
import { GlobalStyles } from "../../global/styles";

const Cart = ({ navigate }: any) => {
  const cartItems = useAppSelector(state => state.cart.cart);

  const renderCart = cartItems.length > 0
    ? <ScrollView>
      {
        cartItems.map((item) => (
          <CartProduct
            title={item.title} images={item.images} thumbnail={item.thumbnail} category={item.category}
            brand={item.brand} rating={item.rating} discountPercentage={item.discountPercentage}
            price={item.price} description={item.description} stock={item.stock} id={item.id}
            count={item.count} />
        ))
      }
    </ScrollView>
    : <View style={styles.empty_cart}>
      <Text style={styles.empty_cart_text}>
        Your cart is empty
      </Text>
      <Text style={styles.empty_cart_text}>
        :(
      </Text>
      <Text style={styles.empty_cart_description}>Add items to continue shopping</Text>
    </View>;

  return (
    <View style={styles.container}>
      <View style={styles.delivery_container}>
      <View style={{flexDirection:'row',gap:3,alignItems:'center'}}>
       <View style={{marginRight:10,padding:3,borderWidth:1,borderRadius:15,alignItems:'center',justifyContent:'center',borderColor:'green'}}>
         <MaterialCommunityIcons  name='truck-delivery-outline' style={{
           fontSize:20
         }} />
       </View>
        <Text>
          Delivery will be
        </Text>
        <Text style={{fontWeight:'700'}}>
          free
        </Text>
      </View>
      </View>
      {renderCart}
      {cartItems.length > 0 && <CartBottomComponent cartItems={cartItems} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  empty_cart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  empty_cart_text: {
    fontSize:24,
    fontWeight:'500'
  },
  empty_cart_description:{
    marginVertical:15,
    color:'gray',
    fontSize:14,
    fontWeight:'400'
  },
  delivery_container:{
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Cart;
