import React, { FC } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IProduct } from "../../interfaces/products";
import { GlobalStyles } from "../../global/styles";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const CartProduct: FC<IProduct> = ({ thumbnail, price, title, brand, count, description }) => {
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
          <View>
            <EvilIcons name="trash" style={{ fontSize: 20 }} />
          </View>
          <Text>
            {count}
          </Text>
          <Text>
            +
          </Text>
        </View>
        <TouchableOpacity>
          <Text>
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
    borderTopWidth: 2,
    borderColor: GlobalStyles.colors.borderGrayColor,
    gap: 15
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
    justifyContent: "space-between"
  },
  interact_left_side: {
    flexDirection: "row",
    gap: 5
  }
});
