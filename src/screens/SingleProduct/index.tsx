import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { productAPI } from "../../redux/api/productAPI";
import { IProduct } from "../../interfaces/products";
import Swiper from "react-native-swiper";
import Entypo from "react-native-vector-icons/Entypo";

const SingleProducts = ({ route, navigation }: any) => {
  const { params } = route;
  const { data, error, isLoading, refetch } = productAPI.useFetchOneProductQuery(params.id, {});
  console.log(params);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);
  console.log(product);

  if (!data && isLoading) {
    return <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "800" }}>Loading ...</Text>;
  } else if (data) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 16
          }}>
          {product?.brand} {product?.title}
        </Text>
        <View style={styles.swiperWrapper}>
          {product &&
            <Swiper style={styles.swiperWrapper}>
              {product?.images.map(link => {
                return <Image
                  key={link}
                  source={{
                    uri: link
                  }}
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                />;
              })}
            </Swiper>
          }
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20
        }}>
          <View style={{
            flexDirection: "row", gap: 2
          }}>
            {product?.rating && new Array(5).fill(<></>).map((_, index) => {
              return <Entypo key={_} name="star" style={{
                color: index + 1 <= product.rating ? "red" : "black"
              }} />;
            })}
          </View>
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            {product?.price} $
          </Text>
        </View>
        <Text style={{ marginVertical: 15, fontSize: 14, fontWeight: "500", color: "gray" }}>
          {product?.description}
        </Text>
      </View>
    );
  }
};

export default SingleProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    gap: 10
  },
  swiperWrapper: {
    height: Dimensions.get("window").height / 2
  }
});
