import { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { FONT } from '../../../constants/styles';

const IconInput = forwardRef(
  ({style, children, placeholder, placeholderTextColor, ...props }, ref) => {
    const textInputRef = useRef();

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      },
    }));

    return (
      <View style={[styles.root, style]}>
        {children}
        <View style={styles.container}>
          <TextInput
            ref={textInputRef}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            autoComplete='off'
            {...props}
          />
        </View>
      </View>
    );
  }
);

export default IconInput;

const styles = StyleSheet.create({
  root: {
    marginVertical: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  container: {
    width: '100%',
    paddingEnd: 16,
  },
  input: {
    paddingHorizontal: 6,
    paddingVertical: 9,
    fontSize: 16,
    fontFamily: FONT,
  },
});
