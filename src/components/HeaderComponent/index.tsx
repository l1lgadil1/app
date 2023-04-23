import React, { FunctionComponent } from "react";

import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { PARAMETERS } from "../../global/enums/parameters";
import { COLORS } from "../../global/enums/colors";
import { IHeaderComponent } from "./props";
import Icon from "react-native-vector-icons/Entypo";

const HeaderComponent: FunctionComponent<IHeaderComponent> = (props): JSX.Element => {
  return (
    <View style={styles.header}>
      <View>
        <Icon name={props.type} style={{
          color: 'white',
          fontSize:30
        }} />
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
    alignItems: "center",
    paddingVertical: 10,
    gap: 5,
    height: PARAMETERS.headerHeight,
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: COLORS.buttons,
    paddingLeft: 10
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});

export default HeaderComponent;
