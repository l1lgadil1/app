import React, { FC, useEffect, useRef, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import IonicIcons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../../global/styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";

interface IProductSortModal {
  activeSort: string;
  setActiveSort: (sort: string) => void;
}

const ProductSortModal: FC<IProductSortModal> = ({ activeSort, setActiveSort }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const sortArray = ["Popular", "Novelties", "Cheaper first", "Expensive first", "High rating"];
  const componentRef = useRef(null);

  const onHandlePress = (title: string) => {
    {
      if (activeSort === title) {
        setActiveSort("");
        setIsModalVisible(false);
      } else {
        setActiveSort(title);
        setIsModalVisible(false);
      }
    }
  };

  return (
    <TouchableOpacity ref={componentRef} onPress={() => setIsModalVisible(true)}>
      <IonicIcons name="swap-vertical" style={{ fontSize: 24, color: GlobalStyles.colors.main }} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 24, fontWeight: "600" }}>
                Sort
              </Text>
              <Pressable
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <AntDesign name="close" style={{ fontSize: 24, color: "gray" }} />
              </Pressable>
            </View>

            <ScrollView>
              {sortArray.map((title) => {
                return <View key={title} style={{
                  borderBottomWidth: 1,
                  borderColor: GlobalStyles.colors.borderGrayColor,
                  paddingBottom: 10,
                  marginBottom: 10

                }}>
                  <TouchableOpacity onPress={() => onHandlePress(title)} style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <Text style={{ fontWeight: "500", fontSize: 20 }}>{title}</Text>
                    {
                      (title === activeSort) && <EvilIcons name="check" style={{
                        color: GlobalStyles.colors.main,
                        fontSize: 24
                      }} />
                    }
                  </TouchableOpacity>
                </View>;
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ProductSortModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  modalView: {
    gap: 15,
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});
