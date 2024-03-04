import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Colors, FONT, ICON_SIZE } from '../../../constants/styles';

const PasswordInput = forwardRef(
  ({ placeholder, style, placeholderTextColor, ...props }, ref) => {
    const [isHidden, setIsHidden] = useState(true);

    function handleToggle() {
      setIsHidden((prevData) => !prevData);
    }

    const textInputRef = useRef();

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      },
    }));

    return (
      <View style={[styles.rootContainer, style]}>
        <MaterialIcons
          name='lock-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />

        <View style={styles.outsideContainer}>
          <View style={styles.insideContainer}>
            <TextInput
              secureTextEntry={isHidden}
              ref={textInputRef}
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              autoComplete='off'
              {...props}
            />
          </View>
        </View>
        <MaterialCommunityIcons
          name={isHidden ? 'eye-outline' : 'eye-off-outline'}
          onPress={handleToggle}
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </View>
    );
  }
);

export default PasswordInput;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  outsideContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  insideContainer: {
    width: '100%',
  },
  input: {
    textAlign: 'left',
    paddingHorizontal: 6,
    paddingVertical: 9,
    fontSize: 16,
    fontFamily: FONT,
  },
});
