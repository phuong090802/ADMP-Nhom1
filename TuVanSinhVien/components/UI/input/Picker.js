import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, FONT } from '../../../constants/styles';

export default function Picker({ options, onChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (options && options.length > 0) {
      setSelectedOption(options[0]);
    }
  }, []);

  function handleSelect(option) {
    setSelectedOption(option);
    setModalVisible(false);
    onChange(option);
  }

  function showModel() {
    setModalVisible(true);
  }

  function hideModel() {
    setModalVisible(false);
  }

  return (
    <>
      <View style={styles.root}>
        <View style={styles.outSideContainer}>
          <Pressable
            onPress={showModel}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.text}>{selectedOption}</Text>
          </Pressable>
        </View>

        <MaterialCommunityIcons
          name='chevron-down'
          size={24}
          color={Colors.black75}
          onPress={showModel}
          style={styles.icon}
        />
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModel}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {options.map((option) => (
              <Pressable
                key={option}
                onPress={() => handleSelect(option)}
                style={({ pressed }) => [
                  styles.option,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.text}>{option}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  outSideContainer: {
    flex: 1,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  icon: {
    margin: -3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black50,
  },
  modalContent: {
    // paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  option: {
    paddingVertical: 12,
    paddingStart: 12,
    paddingEnd: 200,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.ghostWhite,
  },
  text: {
    fontSize: 16,
    fontFamily: FONT,
  },
  pressed: {
    opacity: 0.6,
  },
});
