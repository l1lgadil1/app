import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleProduct from "../screens/SingleProduct";
import Main from "../screens/Main";

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
    <Tab.Screen name="Main" component={Main} />
  </Tab.Navigator>;
};

const Navigation = () => {
  return (
 <>

   <NavigationContainer>
     <Stack.Navigator>
       {/*<Stack.Screen name="Main" component={Main} />*/}
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
