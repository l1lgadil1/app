import React from "react";
import type { PropsWithChildren } from "react";

import {
  StyleSheet,
} from "react-native";
import SignInScreen from "./src/screens/SignInScreen";
import SignInWelcomeScreen from "./src/screens/SignInWelcomeScreen";


function App(): JSX.Element {


  return (
    <>
      <SignInWelcomeScreen/>
      {/*<SignInScreen/>*/}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
