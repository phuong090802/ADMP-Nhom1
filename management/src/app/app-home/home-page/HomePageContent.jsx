import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { paths } from "../../../../constance";
import { AppContext } from "../../AppProvider";
import { HomePageButton } from "./HomePageButton";

export const HomePageContent = () => {
  const { user } = useContext(AppContext);

  const data = {
    ADMIN: [
      {
        id: "1",
        text: "Quản lý khoa",
        iconName: "business-outline",
        iconPackage: "Ionicons",
        link: paths.admin.department,
      },
      {
        id: "2",
        text: "Quản lý người dùng",
        iconName: "users",
        iconPackage: "Feather",
        link: paths.admin.user,
      },
    ],
    DEPARTMENT_HEAD: [
      {
        id: "4",
        text: "Quản lý lĩnh vực",
        iconName: "layers",
        iconPackage: "Feather",
        link: paths.dephead.field,
      },
      {
        id: "3",
        text: "Quản lý tư vấn viên",
        iconName: "users",
        iconPackage: "Feather",
        link: paths.dephead.counsellor,
      },
      {
        id: "6",
        text: "Quản lý thư viện câu hỏi",
        iconName: "question",
        iconPackage: "Octicons",
        link: paths.dephead.faq,
      },
      {
        id: "7",
        text: "Danh sách câu hỏi",
        iconName: "question",
        iconPackage: "Octicons",
        link: paths.counsellor.question,
      },
      {
        id: "5",
        text: "Duyệt câu hỏi",
        iconName: "question",
        iconPackage: "Octicons",
        link: paths.dephead.aprove,
      },
    ],
    COUNSELLOR: [
      {
        id: "10",
        text: "Danh sách câu hỏi",
        iconName: "question",
        iconPackage: "Octicons",
        link: paths.counsellor.question,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1, gap: 8 }}
        data={data[user?.role]}
        renderItem={HomePageButton}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        columnWrapperStyle={{ gap: 12 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
  },
});
