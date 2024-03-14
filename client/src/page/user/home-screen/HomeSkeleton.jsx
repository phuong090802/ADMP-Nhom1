import { View } from "react-native";
import Skeleton from "../../../atom/skeleton";
import { colors } from "../../../../constant";

const HomeSkeleton = () => {
  return (
    <View
      style={{
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        borderRadius: 8,
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        width: "100%",
        borderWidth: 0.5,
        borderColor: colors.black10,
      }}
    >
      <Skeleton width={250} height={25} style={{ borderRadius: 8 }} />
      <View style={{ flexDirection: "row", marginTop: 8, gap: 4 }}>
        <Skeleton width={70} height={15} style={{ borderRadius: 8 }} />
        <Skeleton width={70} height={15} style={{ borderRadius: 8 }} />
        <Skeleton width={70} height={15} style={{ borderRadius: 8 }} />
      </View>
    </View>
  );
};

export default HomeSkeleton;
