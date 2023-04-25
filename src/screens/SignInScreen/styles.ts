import { StyleSheet } from "react-native";
import { COLORS } from "../../global/enums/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    padding: 10,
    gap:15
  },
  title: {
    color: COLORS.buttons,
    fontSize: 20,
    fontWeight: "600"
  },

  centerText: {
    textAlign: "center",
    fontSize: 18,
    color: COLORS.grey2
  },
  textInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    paddingVertical: 12,
    paddingLeft: 10
  },
  textInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10
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
    width: "100%",
    marginVertical:15
  },
  signInButtonTitle: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "600",
    marginTop: -3,
    textAlign: "center"
  },
  forgotPasswordButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    color: COLORS.grey3,
    textDecorationLine: "underline"
  },
  signInWithGoogleButton: {
    backgroundColor: "#de3a3a",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  signInWithGoogleButtonTitle: {
    fontWeight: "700",
    textAlign: "center",
    color: "white"
  },
  createAnAccountButton: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  createAnAccountButtonWrapper: {
    padding: 10,
    borderColor: COLORS.buttons,
    borderRadius: 15,
    borderWidth: 1
  },
  createAnAccountButtonTitle: {
    color: COLORS.buttons,
    fontSize: 14,
    fontWeight: "600"
  }

});

export default  styles;
