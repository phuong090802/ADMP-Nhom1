import { View, ScrollView } from "react-native";
import HomeSkeleton from "./HomeSkeleton";

const HomeSkeletonGroup = () => {
  return (
    <ScrollView
      style={{ rowGap: 8, width: "100%", flex: 1}}
      showsVerticalScrollIndicator={false}
    >
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
    </ScrollView>
  );
};

export default HomeSkeletonGroup;
