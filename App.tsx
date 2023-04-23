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
import HeaderComponent from "./src/components/HeaderComponent";
import { COLORS } from "./src/global/enums/colors";


function App(): JSX.Element {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.statusBar}
      />
      <HeaderComponent type="arrow-left" title={"My account"} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
