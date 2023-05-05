import React, { useEffect, useState } from "react";

import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { productAPI, useFetchAllPostsQuery } from "../../redux/api/productAPI";
import { setProducts } from "../../redux/slices/productSlice";

import ProductCard from "../../components/productCard";
import { GlobalStyles } from "../../global/styles";

const categoryArray: string[] = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration"
];


const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading, refetch } = productAPI.useFetchAllPostsQuery("");
  const products = useAppSelector(state => state.product.products);

  const [category, setCategory] = useState<string>();

  const sortedData = !category ? products : products.filter((product) => product.category == category);

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data.products));
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categories}>
        <Text style={{
          fontWeight: "600",
          fontSize: 16
        }}>
          {!category ? "All products" : category}
        </Text>
      </View>
      <View>
        <ScrollView horizontal={true} contentContainerStyle={styles.sortContainer}>
          {categoryArray.map((category) => (
            <TouchableOpacity style={styles.categoryButton} onPress={() => setCategory(category)}>
              <Text style={{ color: "white", fontSize: 14 }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.productsContainer}>
        {isLoading
          ? <Text style={{ textAlign: "center" }}> Loading ...</Text>
          : <>
            <FlatList
              data={sortedData}
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
  },
  categories: {
    paddingHorizontal: "5%",
    backgroundColor: "white",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ebe8e8"
  },
  sortContainer: {
    paddingHorizontal: "5%",
    backgroundColor: "white",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ebe8e8",
    gap: 5,
    paddingTop: StatusBar.currentHeight
  },
  categoryButton: {
    backgroundColor: "#518ded",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15
  }
});
