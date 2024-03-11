import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { fonts } from "../../../../constant";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#2785DC",
    fontFamily: fonts.BahnschriftRegular,
  },
  formContainer: {
    backgroundColor: "#EDEDED",
    width: "100%",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 40,
    paddingHorizontal: 32,
    paddingBottom: 8,
  },
  formHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#4E504E",
    marginLeft: 8,
    fontFamily: Platform.select({
      android: "BahnschriftBold",
    }),
  },
});

const formStyle = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 24,
    fontFamily: Platform.select({
      android: "BahnschriftRegular",
    }),
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    fontFamily: "BahnschriftRegular",
  },
  footerLink: {
    color: "#4E504E",
    fontSize: 13,
    fontFamily: "BahnschriftRegular",
  },
});

const initLoginData = {
  username: "",
  password: "",
};

export { style, formStyle, initLoginData };
