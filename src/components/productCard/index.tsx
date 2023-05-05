import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IProduct } from "../../interfaces/products";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const ProductCard: FC<IProduct> = (props) => {
  const navigation = useNavigation();

  const { thumbnail, brand, price, title, rating, id } = props;
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  const onHandleProduct = () => {
    // @ts-ignore
    navigation.navigate("SingleProduct", { id,title });
  };
  return (
    <TouchableOpacity onPress={onHandleProduct}>
      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: "100%"
          }}
          source={{
            uri: thumbnail
          }}
        />
        <View style={styles.rightSide}>
          <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
            <Text style={{ fontWeight: "600", fontSize: 16, color: "gray" }}>{brand} </Text>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "gray" }}>{title}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
            {ratingArray.map((_, index) => {
              return <Entypo name="star" style={{
                color: index + 1 <= rating ? "red" : "black"
              }} />;
            })}
          </View>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>{price} $</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 7,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#ebe8e8"
  },
  rightSide: {
    justifyContent: "space-around"
  }
});
