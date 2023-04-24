import React from "react";

import type { PropsWithChildren } from "react";
import {
  StyleSheet,
} from "react-native";

import SignInScreen from "./src/screens/SignInScreen";
import SignInWelcomeScreen from "./src/screens/SignInWelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();
function App(): JSX.Element {


  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name={"Home"} component={SignInWelcomeScreen} />
       <Stack.Screen name={"SignIn"} component={SignInScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
