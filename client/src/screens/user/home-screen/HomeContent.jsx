import { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { fonts } from '../../../../constant';
import TitleBar from '../../../molecule/title-bar';
import {
  getDepFieldsSv,
  getDepsSv,
} from '../../../services/guest/department.sv';
import { getQuestionsSv } from '../../../services/guest/question.sv';
import DropdownItem from './DropdownItem';
import HomeSkeletonGroup from './HomeSkeletonGroup';
import { HomeContext } from './HomeStore';
import SearchModal from './SearchModal';
import SortModal from './SortModal';
import { styles as homeScreenStyles } from './const';

const HomeContent = () => {
  const homeContext = useContext(HomeContext);

  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);

  //get DepsList
  const getDeps = async () => {
    try {
      const response = await getDepsSv();
      const temp = response.departments.map((department) => ({
        value: department.departmentName || 'unknow Dep',
        key: department._id,
      }));

      homeContext.setDepData((prevDeps) => [
        prevDeps,
        { key: 'null', value: 'Tất cả' },
        ...temp,
      ]);
    } catch (error) {
      console.log('Lỗi khi lấy dữ liệu khoa!');
    }
  };

  //get FieldList
  const getFields = async () => {
    if (!homeContext.chosenDep) return;
    try {
      homeContext.setFieldData(null);
      homeContext.setChosenField(null);
      const response = await getDepFieldsSv(homeContext.chosenDep);
      const temp = response.fields.map((field) => ({
        value: field.fieldName || 'unknow Field',
        key: field._id,
      }));
      homeContext.setFieldData((prevFields) => [
        ...prevFields,
        [{ key: 'null', value: 'Tất cả' }, ...temp],
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  // getHomeScreen data
  const getQuestion = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await getQuestionsSv(homeContext.params);
      homeContext.setQuestions((prev) => [...prev, ...response.questions]);
      homeContext.setPages(response.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setEndReached(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestion();
  }, [homeContext.params]);

  useEffect(() => {
    getDeps();
  }, []);

  useEffect(() => {
    getFields();
  }, [homeContext.chosenDep]);

  const handleItemSelect = (id) => {
    if (id === homeContext.selected) {
      homeContext.setSelected(-1);
    } else {
      homeContext.setSelected(id);
    }
  };

  const handleLazy = (nativeEvent) => {
    if (
      !endReached &&
      isCloseToBottom(nativeEvent) &&
      homeContext.params.page < homeContext.pages
    ) {
      homeContext.setParams((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 8;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <>
      <SearchModal />
      <SortModal />
      <View style={homeScreenStyles.container}>
        <TitleBar
          onSearch={() => homeContext.setSearchVisible(true)}
          onSort={() => homeContext.setSortVisible(true)}
        />
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          onScroll={({ nativeEvent }) => handleLazy(nativeEvent)}
        >
          {homeContext.questions.map((question) => (
            <DropdownItem
              key={question._id}
              data={question}
              id={question._id}
              isOpen={homeContext.selected === question._id}
              onSelect={() => handleItemSelect(question._id)}
            />
          ))}
          {loading && <HomeSkeletonGroup />}
          {homeContext.pages !== 0 &&
            homeContext.params.page === homeContext.pages && (
              <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>Đã hết câu hỏi ...</Text>
              </View>
            )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 8,
  },
  fallbackContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  fallbackText: {
    fontSize: 16,
    fontFamily: fonts.BahnschriftRegular,
  },
});

export default HomeContent;
