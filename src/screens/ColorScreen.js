import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Colors = [
  { code: '#452c63', value: '100' },
  { code: '#4B0082', value: '200' },
  { code: '#E6E6FA', value: '300' },
  { code: '#DDA0DD', value: '400' },
  { code: '#1d1160', value: '500' },
];

const ColorScreen = () => {
  const [color, setColor] = useState('#FFFFFF');
  const [selectedColorValue, setSelectedColorValue] = useState('');

  const handleColorChange = (newColor, value) => {
    setColor(newColor);
    setSelectedColorValue(value);
  };

  const renderColor = (colorItem) => {
    return (
      <TouchableOpacity
        key={colorItem.code}
        style={[styles.colorButton, { backgroundColor: colorItem.code }]}
        onPress={() => handleColorChange(colorItem.code, colorItem.value)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topContainer}>
          <View style={[styles.colorBox, { backgroundColor: color }]} />
          <TextInput
            style={styles.textInput}
            placeholder="Selected Color Value"
            value={selectedColorValue}
            editable={false}
          />
        </View>
        <View style={styles.bottomContainer}>{Colors.map(renderColor)}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorBox: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ColorScreen;
