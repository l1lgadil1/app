import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useAppSelector } from "../../redux/store";

const Cart = ({navigate}:any) => {
  const cartItems = useAppSelector(state=>state.cart.cart)

  return (
    <View style={styles.container}>
      <View>
        {
          cartItems.map((item)=>(
            <View>
              <Text>
                {item.title} {item.count}
              </Text>
            </View>
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
});

export default Cart;
