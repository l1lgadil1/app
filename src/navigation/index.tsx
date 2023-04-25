import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInWelcomeScreen from "../screens/SignInWelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";


const Stack = createNativeStackNavigator();

function NavComponent(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"HomeScreen"}
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={"SignInWelcome"}
          component={SignInWelcomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={"SignIn"}
          component={SignInScreen}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default NavComponent;
