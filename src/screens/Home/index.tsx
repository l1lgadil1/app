import React, { useEffect } from "react";

import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { productAPI, useFetchAllPostsQuery } from "../../redux/api/productAPI";
import { setProducts } from "../../redux/slices/productSlice";

import ProductCard from "../../components/productCard";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading, refetch } = productAPI.useFetchAllPostsQuery("");
  const products = useAppSelector(state => state.product.products);

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data.products));
    }
  }, [data]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productsContainer}>
        {isLoading
          ? <Text style={{ textAlign: "center" }}> Loading ...</Text>
          : <>
            <FlatList
              data={products}
              renderItem={
                ({ item, index }) =>
                  <ProductCard
                    key={index}
                    id={item.id} title={item.title} images={item.images}
                    thumbnail={item.thumbnail} category={item.category}
                    brand={item.brand} rating={item.rating}
                    discountPercentage={item.discountPercentage} price={item.price}
                    description={item.description} stock={item.stock}
                  />
              }
            />
          </>
        }
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productsContainer: {
    marginVertical: 15
  }
});
