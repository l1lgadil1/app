import React, { FC } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../global/enums/colors";

import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";
import { ISignInWelcomeeScreen } from "./props";
import styles from './styles'

const SignInWelcomeScreen:FC<ISignInWelcomeeScreen> = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover restaurants in your area</Text>
      </View>
      <View style={styles.wrapper}>
        <Swiper autoplay={true} showsPagination={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg"
              }}
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: "https://www.davidlebovitz.com/wp-content/uploads/2014/05/14241705403_310baa27f5.jpg"
              }}
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://imgix.bustle.com/uploads/image/2020/5/19/f2207691-4c42-42a7-a670-f35d9d21af58-gettyimages-1173390260.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
              }}
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://media-cdn.tripadvisor.com/media/photo-s/1a/0c/0a/31/build-your-own-bowl-or.jpg"
              }}
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={styles.signInButton}>
          <Text style={styles.signInButtonTitle}>Sign-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createYourAccountButton}>
          <Text style={styles.createYourAccountButtonTitle}>
            Create your account
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default SignInWelcomeScreen;
