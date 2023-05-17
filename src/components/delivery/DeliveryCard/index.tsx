import React, { FC } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../global/styles";

interface IDeliveryCard {
  index: number,
  image: string;
  title: string;
  count: number
}

const DeliveryCard: FC<IDeliveryCard> = ({ index, title, image, count }) => {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Order {index + 1} ({title})
          </Text>
          <Text style={{fontSize:14,fontWeight:'500',color:GlobalStyles.colors.gray500}}>
            count: {count}
          </Text>

        </View>
        <Image source={{ uri: image }} style={{
          width: 80,
          height: 100
        }} />
      </View>

    </View>
  );
};

export default DeliveryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "white"
  },
  product: {
    borderBottomWidth: 1,
    borderColor: GlobalStyles.colors.borderGrayColor,
    paddingBottom: 15,
    gap: 15
  }
});
