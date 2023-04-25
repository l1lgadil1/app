import React, { FunctionComponent } from "react";

import {
  StyleSheet,
  Text, TouchableOpacity,
  View
} from "react-native";
import { PARAMETERS } from "../../global/enums/parameters";
import { COLORS } from "../../global/enums/colors";
import { IHeaderComponent } from "./props";
import Icon from "react-native-vector-icons/Entypo";

import styles from './styles'

const HeaderComponent: FunctionComponent<IHeaderComponent> = ({navigation,type,title}): JSX.Element => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icon name={type} style={{
          color: 'white',
          fontSize:30
        }} />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    </View>
  );
};


export default HeaderComponent;
