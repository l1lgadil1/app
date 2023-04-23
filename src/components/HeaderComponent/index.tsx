import React, { FunctionComponent } from "react";

import {

  StyleSheet,
  Text,
  View
} from "react-native";
import { PARAMETERS } from "../../global/enums/parameters";
import { COLORS } from "../../global/enums/colors";
import { IHeaderComponent } from "./props";

const HeaderComponent: FunctionComponent<IHeaderComponent> = (props): JSX.Element => {

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Back</Text>

      </View>
      <View>
        <Text style={styles.headerText}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 30,
    height: PARAMETERS.headerHeight,
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: COLORS.buttons,
    paddingLeft: 30
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});

export default HeaderComponent;
