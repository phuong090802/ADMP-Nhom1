import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Colors, FONT } from '../../../constants/styles';

export default function TextPicker({ label, placeHolder, options, onChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    _id: '',
    fieldName: placeHolder,
  });

  function handleSelect(option) {
    setSelectedOption(option);
    setModalVisible(false);
    // onChange(option);
  }

  function showModel() {
    setModalVisible(true);
  }

  function hideModel() {
    setModalVisible(false);
  }

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.insideLeftContainer}>
            <View style={styles.label}>
              <Text style={styles.text}>{label}</Text>
            </View>
            <View style={styles.outsideButtonContainer}>
              <View style={styles.buttonContainer}>
                <Pressable
                  onPress={showModel}
                  style={({ pressed }) => [
                    styles.button,
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={[styles.text, styles.selected]}>
                    {selectedOption.fieldName}
                  </Text>
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
          </View>
        </View>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModel}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={styles.scroll}>
            <View style={styles.modalContent}>
              {options.map((option) => (
                <Pressable
                  key={option._id}
                  onPress={() => handleSelect(option)}
                  style={({ pressed }) => [
                    styles.option,
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={styles.text}>{option.fieldName}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  insideLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    marginEnd: 16,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  icon: {
    margin: -3,
  },
  scroll: {
    marginVertical: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black50,
  },
  modalContent: {
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
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: FONT,
    color: Colors.black75,
  },
  pressed: {
    opacity: 0.6,
  },
  selected: {
    padding: 3,
  },
  outsideButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.black75,
    marginVertical: 6,
  },
});
