import React from "react";
import type { PropsWithChildren } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { COLORS } from "./src/global/enums/colors";
import SignInScreen from "./src/screens/SignInScreen";


function App(): JSX.Element {


  return (
    <>
      <SignInScreen/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
