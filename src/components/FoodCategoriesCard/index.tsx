import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IFoodCategoriesCard } from "./props";
import { COLORS } from "../../global/enums/colors";

const FoodCategories: FC<IFoodCategoriesCard> = (props) => {
  const {isActive}  = props;
  return (
    <View style={isActive ? styles.containerActive : styles.container}>
     <View style={styles.categoryWrap}>
       <Text style={{
         fontWeight: "700",
         fontSize: 18
       }}>
     Image
       </Text>
     </View>
      <Text style={isActive ? styles.categoryTitle : styles.categoryTitle}>
      CategoryTitle
      </Text>
    </View>
  );
};

export default FoodCategories;

const styles = StyleSheet.create({
  containerActive: {
    height: 120,
    alignItems: "center",
    justifyContent:'space-around',
    width: 80,
    backgroundColor: COLORS.buttons,
    borderRadius: 25,
    paddingBottom:10
  },
  container: {
    height: 120,
    alignItems: "center",
    justifyContent:'space-around',
    width: 80,
    backgroundColor: COLORS.grey5,
    borderRadius: 25,
    paddingBottom:10
  },
  categoryWrap:{
    width:80,
    height:80,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
  },
  categoryTitleActive:{
    color:'white',
    fontWeight:'700',
    fontSize:15,
  },
  categoryTitle:{
    color:COLORS.grey2,
    fontWeight:'700',
    fontSize:15,
  }
});
