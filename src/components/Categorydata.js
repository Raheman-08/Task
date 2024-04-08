import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categorydata = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://esptiles.imperoserver.in/api/API/Product/DashBoard');
      const categoryNames = response.data.Result.Category.map(cat => cat.Name);
      setCategories(categoryNames);
    } catch (error) {
      console.log('Error while fetching the data', error);
    }
  };

  return (
    <View>
      {categories && categories.length > 0 ? (
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item, index) => index.toString()} // Using index as key
          renderItem={({ item }) => (
            <View style={styles.dataStyle}>
              <TouchableOpacity style={styles.dataText}>{item.Category_Names}</TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>No categories found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dataStyle: {
    margin: 10,
  },
  dataText: {
    color: 'white',
  },
});

export default Categorydata;
