import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import { style } from './const';

const TitleBar = ({ onSearch, onSort }) => {
  return (
    <LinearGradient
      colors={['#2785DC', '#1DDBD2']}
      start={[0, 0]}
      end={[1, 0]}
      style={style.container}
    >
      <Text style={style.title}>Hỏi đáp</Text>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        {onSort && (
          <TouchableOpacity onPress={onSort}>
            <Octicons name='filter' color={'#fff'} size={24} />
          </TouchableOpacity>
        )}
        {onSearch && (
          <TouchableOpacity onPress={onSearch}>
            <Octicons name='search' color={'#fff'} size={24} />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

export default TitleBar;
