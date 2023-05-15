import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleProduct from "../screens/SingleProduct";
import Cart from "../screens/Cart";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import IonicIcons from "react-native-vector-icons/Ionicons";
import { Text, View } from "react-native";
import { GlobalStyles } from "../global/styles";
import { useAppSelector } from "../redux/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CartTitle = (): any => {

  return (
    <View style={{ flexDirection: "row", gap: 4 }}>
      <Text>
        Cart
      </Text>
      <EvilIcons name="cart" style={{ fontSize: 20 }} />
    </View>);
};

const TabScreen = () => {
  const cartItems = useAppSelector(state => state.cart.cart);
  const totalItemCount = cartItems.reduce((acc,obj)=>{
    return (acc + obj?.count!);
  },0)

  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName:string;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'md-cart' : 'md-cart-outline';
        }

        // You can return any component that you like here!
        return <IonicIcons name={iconName!} size={size} color={color} />;
      },
      tabBarActiveTintColor: GlobalStyles.colors.main,
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" options={{
      headerShown: false
    }} component={HomeScreen} />
    <Tab.Screen name="Cart" component={Cart} options={{
      headerTitle: () => <CartTitle />
    }} />
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
          <Stack.Screen name="SingleProduct" component={SingleProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
