import React, { FC, useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import * as Animatable from "react-native-animatable";

import { ISignInScreen } from "./props";
import HeaderComponent from "../../components/HeaderComponent";
import { COLORS } from "../../global/enums/colors";

import Icon from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles';

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

          <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('HomeScreen')}>
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

