import { ScrollView, Text, View } from "react-native";
import { style } from "./const";
import DropdownItem from "./DropdownItem";
import TitleBar from "../../../molecule/title-bar";
import { useState } from "react";

const HomeScreen = () => {
  const [selected, setSelected] = useState(-1);

  const itemList = [1, 2, 3, 4, 5, 6, 7];

  const handleItemSelect = (id) => {
    if (id === selected) {
      setSelected(-1);
    } else {
      setSelected(id);
    }
  };

  return (
    <View style={style.container}>
      <TitleBar />
      <ScrollView style={{ marginTop: 8 }} showsVerticalScrollIndicator={false}>
        {itemList.map((id) => {
          return (
            <DropdownItem
              key={id}
              id={id}
              isOpen={selected === id}
              onSelect={() => handleItemSelect(id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
