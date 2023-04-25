import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../global/enums/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 30
  },
  headerTitle: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "700",
    color: COLORS.buttons,
    fontSize: 24
  },
  wrapper: {
    height: Dimensions.get("window").height / 2
  },
  slide1: {
    height: Dimensions.get("window").height / 2,
    width: "100%"
  },
  slide2: {
    height: Dimensions.get("window").height / 2,
    width: "100%"
  },
  slide3: {
    height: Dimensions.get("window").height / 2,
    width: "100%"
  },
  footer: {
    width: "100%",
    paddingHorizontal: 15,
    gap: 5,
    marginVertical:20
  },
  signInButton: {
    backgroundColor: "#ff8c52",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FfBc52",
    height: 40,
    paddingHorizontal: 20,
    width: "100%"
  },
  signInButtonTitle: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "600",
    marginTop: -3,
    textAlign: "center"
  },
  createYourAccountButton: {
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.grey3,
    height: 40,
    paddingHorizontal: 20,
    width: "100%"
  },
  createYourAccountButtonTitle: {
    color: COLORS.grey3,
    fontSize: 16,
    fontWeight: "800",
    marginTop: -3,
    textAlign: "center"
  }
});

export default  styles;
