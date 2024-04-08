import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Categorydata = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(': http://esptiles.imperoserver.in/api/API/Product/DashBoard');
            setCategories(response.data);
        }
        catch (error) {
            console.log('Error while fetching the data', error);
        }
    };

  return (
    <View>
      <FlatList horizontal data={categories} renderItem={({ item }) => (
        <View style={styles.dataStyle}>
            <Text style={styles.dataText}>{item.SubCategoryId}</Text>
        </View>
        
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    dataStyle: {
        margin: 10,
        
    },
    dataText: {
        color: "white",
    }
})

export default Categorydata