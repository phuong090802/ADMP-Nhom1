import AsyncStorage from '@react-native-async-storage/async-storage';

export const createHeader = async (type) => {
  const token = await AsyncStorage.getItem("accessToken");
  const header = {
    author: { Authorization: `Bearer ${token}` },
  };
  const result = type.reduce((prev, t) => {
    return { ...prev, ...header[t] };
  }, {});
  return result;
};
