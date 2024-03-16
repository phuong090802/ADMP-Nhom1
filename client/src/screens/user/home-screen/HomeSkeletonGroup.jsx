import { ScrollView, StyleSheet } from 'react-native';

import HomeSkeleton from './HomeSkeleton';

const HomeSkeletonGroup = () => {
  return (
    <ScrollView
      style={styles.rootContainer}
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

const styles = StyleSheet.create({
  rootContainer: {
    rowGap: 8,
    width: '100%',
    flex: 1,
  },
});

export default HomeSkeletonGroup;
