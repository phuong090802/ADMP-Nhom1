import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DepheadAproveContext } from "./DepheadAproveProvider";
import ScreenHeader from "../../../component/molecule/screen-header";
import ItemSkeleton from "../../../component/molecule/item-skeleton";
import { Item } from "./Item";
import Pagination from "../../../component/molecule/pagination";
import { AproveDetailModal } from "./AproveDetailModal";

export const DepheadAproveContent = () => {
  const { pages, params, setParams, answers, loading } =
    useContext(DepheadAproveContext);
  return (
    <View style={styles.container}>
      <AproveDetailModal />
      <ScreenHeader
        params={params}
        setParams={setParams}
        title={"Duyệt câu trả lời"}
      />
      <ScrollView
        style={styles.contentContaier}
        showsVerticalScrollIndicator={false}
      >
        <ItemSkeleton loading={loading} />
        {answers.map((answer, index) => (
          <Item key={answer?._id || index} data={answer} />
        ))}
        <Pagination page={params.page} pages={pages} setParams={setParams} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 8, paddingTop: 8 },
  contentContaier: { marginTop: 8, marginBottom: 96 },
});
