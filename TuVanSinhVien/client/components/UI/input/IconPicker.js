import { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import Picker from './Picker';

const IconPicker = forwardRef(({ children, onChange, options }, ref) => {
  const textInputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    },
  }));

  return (
    <View style={styles.rootContainer}>
      {children}
      <Picker onChange={onChange} options={options} />
    </View>
  );
});

export default IconPicker;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
});
