import { ScrollView, Text, View } from "react-native";
import { initParams, style } from "./const";
import DropdownItem from "./DropdownItem";
import TitleBar from "../../../molecule/title-bar";
import { createContext, useEffect, useState } from "react";
import { getQuestionsSv } from "../../../service/guest/question.sv";
import SearchModal from "./SearchModal";
import {
  getDepFieldsSv,
  getDepsSv,
} from "../../../service/guest/department.sv";
import SortModal from "./SortModal";
import HomeSkeletonGroup from "./HomeSkeletonGroup";

export const HomeContext = createContext();

const HomeScreen = () => {
  const [selected, setSelected] = useState(-1);

  const [questions, setQuestions] = useState();

  const [params, setParams] = useState(initParams);

  const [searchVisible, setSearchVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  // State for searh & filter
  const [depData, setDepData] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const [chosenDep, setChosenDep] = useState(null);
  const [chosenField, setChosenField] = useState(null);

  const [loading, setLoading] = useState(false);

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
      setQuestions(response.questions);
    } catch (error) {
      console.log(error);
    } finally {
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

  const searchHandle = () => {
    let tempFilter = { ...params.filter };
    console.log(tempFilter);
    if (!chosenDep) tempFilter = {};
    else {
      tempFilter.department = chosenDep;
      if (!chosenField) delete tempFilter.fieldId;
      else tempFilter.field = chosenField;
    }
    setParams((prev) => ({ ...prev, filter: tempFilter }));
  };

  return (
    <HomeContext.Provider
      value={{
        depData,

        fieldData,
        setFieldData,

        searchVisible,
        setSearchVisible,

        chosenDep,
        setChosenDep,

        chosenField,
        setChosenField,

        params,
        setParams,

        searchHandle,

        sortVisible,
        setSortVisible,
      }}
    >
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
        >
          {questions &&
            questions.map((question) => {
              return (
                <DropdownItem
                  key={question._id}
                  data={question}
                  id={question._id}
                  isOpen={selected === question._id}
                  onSelect={() => handleItemSelect(question._id)}
                />
              );
            })}
        </ScrollView>
        {loading && <HomeSkeletonGroup />}
      </View>
    </HomeContext.Provider>
  );
};

export default HomeScreen;
