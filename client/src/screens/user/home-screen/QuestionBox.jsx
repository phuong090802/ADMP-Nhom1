import { Text, View } from 'react-native';

import { colors } from '../../../../constant';
import Octicon from '../../../atom/octicon';
import { dropdownContentStyles } from './const';

const QuestionBox = ({ content }) => {
  return (
    <View style={dropdownContentStyles.container}>
      <Octicon name={'comment'} size={24} color={colors.primary} />
      <View style={{ width: '85%' }}>
        <Text style={dropdownContentStyles.title}>Câu hỏi</Text>
        <Text style={dropdownContentStyles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default QuestionBox;
