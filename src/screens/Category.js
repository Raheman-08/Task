import React from 'react';
import { View, Text, SafeAreaView, StyleSheet , StatusBar, TouchableOpacity} from 'react-native';
import Categorydata from '../components/Categorydata';



const Category = () => {
  return (

    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ES TILES</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Categorydata />
      
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 16,
    height: 100,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  content: {
    flex: 1,
    padding: 16,
  },
  dataTextContainer: {
    marginTop: 20,
  },
  dataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default Category;
