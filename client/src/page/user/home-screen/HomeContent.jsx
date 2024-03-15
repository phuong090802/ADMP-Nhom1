import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import TitleBar from "../../../molecule/title-bar";
import {
  getDepFieldsSv,
  getDepsSv,
} from "../../../service/guest/department.sv";
import { getQuestionsSv } from "../../../service/guest/question.sv";
import DropdownItem from "./DropdownItem";
import HomeSkeletonGroup from "./HomeSkeletonGroup";
import { HomeContext } from "./HomeStore";
import SearchModal from "./SearchModal";
import SortModal from "./SortModal";
import { style } from "./const";
import { fonts } from "../../../../constant";

const HomeContent = () => {
  const {
    setDepData,
    setFieldData,
    chosenDep,
    setChosenField,
    pages,
    setPages,
    params,
    setParams,
    questions,
    setQuestions,
    selected,
    setSelected,
    setSearchVisible,
    setSortVisible,
  } = useContext(HomeContext);

  const [loading, setLoading] = useState(false);

  const [endReached, setEndReached] = useState(false);

  //get DepsList
  const getDeps = async () => {
    try {
      const response = await getDepsSv();
      const temp = response.departments.map((department) => {
        return {
          value: department.departmentName || "unknow Dep",
          key: department._id,
        };
      });
      setDepData([{ key: "null", value: "Tất cả" }, ...temp]);
    } catch (error) {
      console.log("Lỗi khi lấy dữ liệu khoa!");
    }
  };

  //get FieldList
  const getFields = async () => {
    if (!chosenDep) return;
    try {
      setFieldData(null);
      setChosenField(null);
      const response = await getDepFieldsSv(chosenDep);
      const temp = response.fields.map((field) => {
        return {
          value: field.fieldName || "unknow Field",
          key: field._id,
        };
      });
      setFieldData([{ key: "null", value: "Tất cả" }, ...temp]);
    } catch (error) {
      console.log(error);
    }
  };

  // getHomeScreen data
  const getQuestion = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await getQuestionsSv(params);
      setQuestions((prev) => [...prev, ...response.questions]);
      setPages(response.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setEndReached(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestion();
  }, [params]);

  useEffect(() => {
    getDeps();
  }, []);

  useEffect(() => {
    getFields();
  }, [chosenDep]);

  const handleItemSelect = (id) => {
    if (id === selected) {
      setSelected(-1);
    } else {
      setSelected(id);
    }
  };

  const handleLazy = (nativeEvent) => {
    if (!endReached && isCloseToBottom(nativeEvent) && params.page < pages) {
      setParams((prev) => ({ ...prev, page: prev.page + 1 }));
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
      <View style={style.container}>
        <TitleBar
          onSearch={() => setSearchVisible(true)}
          onSort={() => setSortVisible(true)}
        />
        <ScrollView
          style={{ marginTop: 8 }}
          showsVerticalScrollIndicator={false}
          onScroll={({ nativeEvent }) => handleLazy(nativeEvent)}
        >
          {questions.map((question) => (
            <DropdownItem
              key={question._id}
              data={question}
              id={question._id}
              isOpen={selected === question._id}
              onSelect={() => handleItemSelect(question._id)}
            />
          ))}
          {loading && <HomeSkeletonGroup />}
          {pages !== 0 &&  params.page === pages && (
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 8,
              }}
            >
              <Text
                style={{ fontSize: 16, fontFamily: fonts.BahnschriftRegular }}
              >
                Đã hết câu hỏi ...
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default HomeContent;
