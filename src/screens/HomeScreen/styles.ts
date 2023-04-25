import { StyleSheet } from "react-native";
import { COLORS } from "../../global/enums/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.buttons
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "800"
  },
  methodButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    alignItems: "center",
    marginVertical: 10
  },
  methodButton: {
    backgroundColor: COLORS.grey5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  methodButtonText: {
    color: COLORS.grey3,
    fontSize: 14,
    fontWeight: "600"
  },
  methodButtonActive: {
    backgroundColor: COLORS.buttons,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  methodButtonActiveText: {
    color: COLORS.grey1,
    fontSize: 14,
    fontWeight: "600"
  },
  categoriesWrapper: {
    backgroundColor: COLORS.grey4
  },
  categoriesWrapperText: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.grey2
  },
  categoriesItems: {
    paddingVertical:15,
  },
  locationContainerWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginHorizontal: 15,
    marginBottom: 20
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grey5,
    flex: 1,
    borderRadius: 15,
    paddingVertical: 5
  },
  locationContainerButton: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    height: "100%",

    paddingHorizontal: 15,
    borderRadius: 20
  },
  locationContainerButtonText: {
    color: COLORS.grey1
  },
  locationContainerButtonActive: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 20
  },
  locationContainerButtonActiveText: {
    color: COLORS.grey1
  }

});

export default styles;
