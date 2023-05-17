import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../redux/store";
import CartProduct from "../../components/cart/cartProduct";
import CartBottomComponent from "../../components/cart/cartBottomComponent";
import DeliveryComponent from "../../components/cart/DeliveryComponent";

const Cart = ({ navigate }: any) => {
  const cartItems = useAppSelector(state => state.cart.cart);

  const renderCart = cartItems.length > 0

    ?
    <>
      <DeliveryComponent />
      <ScrollView>
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

    </>
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
    fontSize: 24,
    fontWeight: "500"
  },
  empty_cart_description: {
    marginVertical: 15,
    color: "gray",
    fontSize: 14,
    fontWeight: "400"
  }

});

export default Cart;
