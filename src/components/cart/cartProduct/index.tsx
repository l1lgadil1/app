import React, { FC } from "react";
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IProduct } from "../../../interfaces/products";
import { GlobalStyles } from "../../../global/styles";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addProductCount, deleteProduct } from "../../../redux/slices/cartSlice";

const CartProduct: FC<IProduct> = ({ thumbnail, price, title, brand, count, description, id }) => {
  const dispatch = useAppDispatch();
  const onHandleIncreaseCount = () => {
    dispatch(addProductCount(id));
  };
  const onHandleDeleteButton = () => {
    Alert.alert("Delete item", "?", [
      { text: "No", onPress: () => console.log("OK Pressed") },
      {
        text: "Yes",
        onPress: () => dispatch(deleteProduct(id)),
        style: "cancel"
      }

    ]);
  };
  const onHandleDelete = () => {

    dispatch(deleteProduct(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={{
          uri: thumbnail
        }} style={{
          height: 100,
          width: 100
        }} />
        <View style={styles.main_right_side}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              {price} $
            </Text>
            <Text style={{ fontSize: 12, color: GlobalStyles.colors.gray500 }}>
              {price} $/pc.
            </Text>
          </View>

          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            {title}
          </Text>
          <Text>
            Brand: {brand}
          </Text>

        </View>
      </View>
      <View style={styles.interact}>
        <View style={styles.interact_left_side}>
          <TouchableOpacity style={styles.button} onPress={onHandleDeleteButton}>
            <EvilIcons name="trash" style={{ fontSize: 20, color: GlobalStyles.colors.main }} />
          </TouchableOpacity>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>
              {count}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onHandleIncreaseCount}>
            <Text style={{ fontSize: 20, color: GlobalStyles.colors.main }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onHandleDelete}>
          <Text style={{ fontSize: 14, color: GlobalStyles.colors.main }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth:1,
    borderColor: GlobalStyles.colors.borderGrayColor,
    gap: 15,
    paddingVertical: 15,
    backgroundColor:'white'
  },
  main: {
    flexDirection: "row",
    gap: 30
  },
  main_right_side: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  interact: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  interact_left_side: {
    flexDirection: "row",
    gap: 10
  },
  button: {
    height: 30,
    width: 30,
    justifyContent: "center",
    borderColor: "gray",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5
  }
});
