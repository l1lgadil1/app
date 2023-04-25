import { StyleSheet } from "react-native";
import { PARAMETERS } from "../../global/enums/parameters";
import { COLORS } from "../../global/enums/colors";

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
export  default  styles;
