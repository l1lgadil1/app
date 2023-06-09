import React, { useEffect, useState } from "react";

import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { productAPI, useFetchAllPostsQuery } from "../../redux/api/productAPI";
import { setProducts } from "../../redux/slices/productSlice";
import AntDesign from "react-native-vector-icons/AntDesign";
import IonicIcons from "react-native-vector-icons/Ionicons";

import ProductCard from "../../components/cart/productCard";
import { GlobalStyles } from "../../global/styles";
import ProductSortModal from "../../components/productsSortModal";
import { IProduct } from "../../interfaces/products";

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
  const [activeSort, setActiveSort] = useState<string>("Popular");
  const [searchValue, setSearchValue] = useState<string>("");

  const sortedData = !category ? products : products.filter((product) => product.category == category);
  const searchData = sortedData.filter((item) => {
    if (item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
      return true;
    }
  });
  const FlatListArray = (activeSort === "Popular") ? searchData : searchData.sort((a: IProduct, b: IProduct):any => {
    if (activeSort === "Novelties") {
      return b.stock - a.stock;
    } else if (activeSort === "Cheaper first") {
      return a.price - b.price;
    } else if (activeSort === "Expensive first") {
      return b.price - a.price;
    } else if (activeSort === "High rating") {
      return b.rating - a.rating;
    }
  });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data.products));
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name="left" style={{ fontSize: 24, color: GlobalStyles.colors.main }} />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          < AntDesign name="search1" style={{ fontSize: 20, color: "gray" }} />
          <TextInput placeholder={"Search here..."} onChangeText={text => setSearchValue(text)}
                     style={{ color: "gray", width: "100%" }} />
        </View>
      </View>

      <View style={styles.categories}>
        <Text style={{
          fontWeight: "600",
          fontSize: 16
        }}>
          {!category ? "All products" : category}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{
            padding: 5,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: GlobalStyles.colors.borderGrayColor
          }}>
            <ProductSortModal activeSort={activeSort} setActiveSort={setActiveSort} />
          </View>
          <IonicIcons name="options" style={{ fontSize: 24, color: GlobalStyles.colors.main, padding: 5 }} />
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} contentContainerStyle={styles.sortContainer}>
          {categoryArray.map((categoryTitle) => (
            <TouchableOpacity style={{
              ...styles.categoryButton,
              borderWidth: categoryTitle === category && 2,
              borderColor: GlobalStyles.colors.gray500
            }}
                              onPress={() => setCategory(categoryTitle)}>
              <Text style={{ color: "white", fontSize: 14 }}>{categoryTitle}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.productsContainer}>
        {isLoading
          ? <Text style={{ textAlign: "center" }}> Loading ...</Text>
          : <>
            <FlatList
              data={FlatListArray}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.borderGrayColor
  },
  sortContainer: {
    paddingHorizontal: "5%",
    backgroundColor: "white",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.borderGrayColor,
    gap: 5,
    paddingTop: StatusBar.currentHeight
  },
  categoryButton: {
    backgroundColor: GlobalStyles.colors.main,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 25,
    paddingVertical: 5
  },
  textInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    gap: 5,
    borderRadius: 10,
    width: "85%"
  },

});
