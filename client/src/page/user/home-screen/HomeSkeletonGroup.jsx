import { View, ScrollView } from "react-native";
import HomeSkeleton from "./HomeSkeleton";

const HomeSkeletonGroup = () => {
  return (
    <View style={{ rowGap: 8, width: "100%", marginTop: 8 }}>
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
      <HomeSkeleton />
    </View>
  );
};

export default HomeSkeletonGroup;
