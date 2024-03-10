import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../../constant";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

const questionBoxStyle = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: colors.black10,
    marginBottom: 16,
    borderRadius: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  questionInfor: {
    width: "85%",
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.BahnschriftBold,
    color: colors.black75,
  },
  inforContainer: {
    display: "flex",
    flexDirection:'row',
    alignItems:"center",
    gap: 4,
  },
  authorImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  inforText: {
    fontSize: 12,
    fontFamily: fonts.BahnschriftRegular,
  },
  icon: {},
});

export { style, questionBoxStyle };
