import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../../global/styles";
import { IProduct } from "../../../interfaces/products";
import { useNavigation } from "@react-navigation/native";

interface ICartBottomComponent {
  cartItems: IProduct[];
}

const CartBottomComponent: FC<ICartBottomComponent> = ({ cartItems }) => {
  const navigation = useNavigation();

  const totalItemCount = cartItems.reduce((acc, obj) => {
    return (acc + obj?.count!);
  }, 0);
  const totalItemPrice = cartItems.reduce((acc, obj) => {
    return (acc + obj.price!);
  }, 0);

  const onHandleContinue = () =>{
    navigation.navigate('DeliveryPage' as never);
  }

  return (
    <View style={styles.bottom}>
      <View style={styles.cartInfo}>
        <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "400" }}>
            Items in cart:
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {totalItemCount} items
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "400" }}>
            Total:
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {totalItemPrice} $
          </Text>
        </View>

      </View>
      <TouchableOpacity onPress={onHandleContinue} style={styles.continueContainer}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
    ;
};

const styles = StyleSheet.create({
  bottom: {},
  cartInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white"
  },
  continueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: GlobalStyles.colors.main,
    height: 50
  }
});
export default CartBottomComponent;
