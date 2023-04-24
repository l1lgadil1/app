import React, { FC, useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import * as Animatable from "react-native-animatable";

import { ISignInScreen } from "./props";
import HeaderComponent from "../../components/HeaderComponent";
import { COLORS } from "../../global/enums/colors";

import Icon from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SignInScreen: FC<ISignInScreen> = ({ navigation }) => {
  const [isPasswordInputFocused, setIsPasswordInputFocussed] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type={"chevron-left"} title={"My account"} navigation={navigation} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Sign-In
        </Text>

        <Text style={styles.centerText}>
          Please enter the email and password
          registered with your account
        </Text>

        <View style={{
          marginTop: 10
        }}>
          <View>
            <TextInput
              style={styles.textInput1}
              placeholder={"Email"}
            />
          </View>

          <View style={styles.textInput2}>
            <Animatable.View duration={500} animation={isPasswordInputFocused ? "" : "fadeInDown"}>
              <Icon name={"lock"} color={COLORS.grey3} />
            </Animatable.View>
            <TextInput onFocus={() => setIsPasswordInputFocussed(false)} onBlur={() => setIsPasswordInputFocussed(true)}
                       placeholder={"Password"} style={{
              width: "80%"
            }} />
            <Animatable.View duration={500} animation={isPasswordInputFocused ? "" : "fadeInDown"}>
              <Icon name={"eye"} color={COLORS.grey3} />
            </Animatable.View>
          </View>

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonTitle}>Sign-In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordButtonText}>Forgot password ?</Text>
          </TouchableOpacity>
        </View>


        <View style={{
          marginVertical: 30,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            fontWeight: "700",
            textTransform: "uppercase",
            fontSize: 20
          }}>
            or
          </Text>
        </View>

        <View style={{
          gap: 20,
          alignItems: "center"
        }}>
          <TouchableOpacity style={styles.signInWithGoogleButton}>
            <FontAwesome name={"google"} color={"white"} />
            <Text style={styles.signInWithGoogleButtonTitle}>Sign in With Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.createAnAccountButton}>
          <View style={styles.createAnAccountButtonWrapper}>
            <Text style={styles.createAnAccountButtonTitle}>Create an account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
