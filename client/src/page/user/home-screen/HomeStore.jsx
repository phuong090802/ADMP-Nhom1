import { createContext, useState } from "react";
import { initParams } from "./const";
export const HomeContext = createContext();

const HomeStore = ({ children }) => {
  const [selected, setSelected] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [params, setParams] = useState(initParams);
  const [searchVisible, setSearchVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  const [depData, setDepData] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const [chosenDep, setChosenDep] = useState(null);
  const [chosenField, setChosenField] = useState(null);

  const [pages, setPages] = useState(0);

  return (
    <HomeContext.Provider
      value={{
        params,
        setParams,
        questions,
        setQuestions,
        params,
        setParams,
        searchVisible,
        setSearchVisible,
        sortVisible,
        setSortVisible,
        depData,
        setDepData,
        fieldData,
        setFieldData,
        chosenDep,
        setChosenDep,
        chosenField,
        setChosenField,
        selected,
        setSelected,
        pages,
        setPages,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeStore;
