import React from "react";
import type { PropsWithChildren } from "react";

import {

  StyleSheet,
  Text,
  View
} from "react-native";
import { PARAMETERS } from "../../global/enums/parameters";


function HeaderComponent(): JSX.Element {


  return (
    <View style={styles.header}>
      <View>
        <Text>Back</Text>
      </View>
      <View>
        <Text>
          My account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent:'space-between',
    flexDirection: "row",
    height: PARAMETERS.headerHeight,
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal:30
  }
});

export default HeaderComponent;
