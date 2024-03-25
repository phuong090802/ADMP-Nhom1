import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../../../../constant";
import MyIcon from "../../../atom/my-icon";
import Layout from "../../../template/layout";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <View style={styles.rootContainer}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("AskedQuestion");
            }}
          >
            <Text style={styles.title}>Câu hỏi đã hỏi</Text>
          </TouchableOpacity>
          <View style={styles.icon}>
            <MyIcon
              name={"chevron-forward"}
              iconPackage={"Ionicons"}
              size={24}
            />
          </View>
        </View>
        <View style={{ marginTop: 8 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("AppHome");
            }}
          >
            <Text style={styles.title}>Trở về</Text>
          </TouchableOpacity>
          <View style={styles.icon}>
            <MyIcon
              name={"chevron-forward"}
              iconPackage={"Ionicons"}
              size={24}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
    position: "relative",
  },
  button: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.black10,
  },
  title: {
    fontFamily: fonts.BahnschriftBold,
    fontSize: 16,
    color: colors.black75,
  },
  icon: {
    position: "absolute",
    top: 14,
    right: 16,
    backgroundColor: colors.black10,
    padding: 2,
    borderRadius: 20,
  },
});

export default MenuScreen;
