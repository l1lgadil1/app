import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const DeliveryComponent
  = () => {
  return (
    <View style={styles.delivery_container}>
      <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
        <View style={{
          marginRight: 10,
          padding: 3,
          borderWidth: 1,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "green"
        }}>
          <MaterialCommunityIcons name="truck-delivery-outline" style={{
            fontSize: 20
          }} />
        </View>
        <Text>
          Delivery will be
        </Text>
        <Text style={{ fontWeight: "700" }}>
          free
        </Text>
      </View>
    </View>

  );
};

export default DeliveryComponent
;

const styles = StyleSheet.create({
  delivery_container: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
})
