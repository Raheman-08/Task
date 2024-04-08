import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://esptiles.imperoserver.in/api/API/Product/DashBoard');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ES TILES</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <View style={styles.dataStyle}>
              <TouchableOpacity>
                <Text style={styles.dataText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
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
  dataStyle: {
    paddingHorizontal: 18,
  }
});

export default Category;
