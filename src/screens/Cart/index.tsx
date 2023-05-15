import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { useAppSelector } from "../../redux/store";
import CartProduct from "../../components/cartProduct";

const Cart = ({ navigate }: any) => {
  const cartItems = useAppSelector(state => state.cart.cart);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1

  }
});

export default Cart;
