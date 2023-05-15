import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleProduct from "../screens/SingleProduct";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return <Tab.Navigator
    screenOptions={{
    }}
  >
    <Tab.Screen name="Home" options={{
      headerShown: false,
    }} component={HomeScreen} />
    <Tab.Screen name="Cart" component={Cart} />
  </Tab.Navigator>;
};

const Navigation = () => {
  return (
 <>

   <NavigationContainer>
     <Stack.Navigator>
       {/*<Stack.Screen name="Cart" component={Cart} />*/}
       <Stack.Screen name="Tab" options={{
         headerShown: false
       }} component={TabScreen} />
       <Stack.Screen name='SingleProduct' component={SingleProduct} />
     </Stack.Navigator>
   </NavigationContainer>
 </>
  );
};

export default Navigation;
