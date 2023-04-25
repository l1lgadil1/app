import React, { FC, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import IonicIcons from "react-native-vector-icons/Ionicons";

import { COLORS } from "../../global/enums/colors";
import styles from "./styles";
import FoodCategoriesCard from "../../components/FoodCategoriesCard";
import { IHomeScreen } from "./props";

const HomeScreen:FC<IHomeScreen> = ({navigation}) => {
  const [isButtonDelieveryActive, setIsButtonDelieveryActive] = useState<boolean>(true);
  const [isButtonPickupActive, setIsButtonPickupActive] = useState<boolean>(false);
  const [isLocationButtonActive, setIsLocationButtonActive] = useState<boolean>(false);
  const [isExpressTimeButtonActive, setIsExpressButtonActive] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >
          <Entypo name={"menu"} style={{
            fontSize: 30
          }} color={"white"} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Express Food</Text>
        </View>
        <TouchableOpacity>
          <EvilIcons name={"cart"} color={"white"} style={{
            fontSize: 30
          }} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>

        <View style={styles.methodButtons}>
          <TouchableOpacity onPress={() => {
            setIsButtonDelieveryActive(true);
            setIsButtonPickupActive(false);
          }} style={isButtonDelieveryActive ? styles.methodButtonActive : styles.methodButton}>
            <Text
              style={isButtonDelieveryActive ? styles.methodButtonActiveText : styles.methodButtonText}>Delievery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setIsButtonPickupActive(prev => !prev);
            setIsButtonDelieveryActive(prev => !prev);
          }} style={isButtonPickupActive ? styles.methodButtonActive : styles.methodButton}>
            <Text style={isButtonPickupActive ? styles.methodButtonActiveText : styles.methodButtonText}>Pick up</Text>
          </TouchableOpacity>


        </View>
        <View style={styles.locationContainerWrapper}>
          <View style={styles.locationContainer}>
            <TouchableOpacity
              onPress={() => {
                setIsExpressButtonActive(prev => !prev);
                setIsLocationButtonActive(prev => !prev);
              }}
              style={isLocationButtonActive ? styles.locationContainerButtonActive : styles.locationContainerButton}>
              <EvilIcons name={"location"} style={{ fontSize: 30 }} />
              <Text style={styles.locationContainerButtonText}>30 Best Street</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsExpressButtonActive(prev => !prev);
                setIsLocationButtonActive(prev => !prev);
              }}
              style={isExpressTimeButtonActive ? styles.locationContainerButtonActive : styles.locationContainerButton}>
              <IonicIcons name={"time"} style={{ fontSize: 30 }} />
              <Text style={styles.locationContainerButtonActiveText}>Now</Text>
            </TouchableOpacity>

          </View>
          <TouchableOpacity>
            <IonicIcons name={"options"} style={{ fontSize: 30, color: COLORS.grey2 }} />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesWrapperText}>Categories</Text>
          </View>

          <ScrollView horizontal={true} contentContainerStyle={styles.categoriesItems}>
            <FoodCategoriesCard />
            <FoodCategoriesCard />
            <FoodCategoriesCard />
            <FoodCategoriesCard />
            <FoodCategoriesCard />
            <FoodCategoriesCard />
          </ScrollView>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

