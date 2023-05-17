import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../redux/store";
import DeliveryCard from "../../components/delivery/DeliveryCard";

const DeliveryPage = () => {
  const cartItems = useAppSelector(state => state.cart.cart);

  return (
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((item, index) => <DeliveryCard
          index={index}
          title={item.title}
          image={item.thumbnail}
          key={item.title}
          count={item.count}
        />)}
      </ScrollView>
    </View>
  );
};

export default DeliveryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15
  }
});
