import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const CategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          'http://esptiles.imperoserver.in/api/API/Product/DashBoard',
          {
            CategoryId: 0,
            DeviceManufacturer: 'Google',
            DeviceModel: 'Android SDK built for x86',
            DeviceToken: '',
            PageIndex: 1,
          },
        );
        console.log(response.data.Result);
        setCategories(response.data.Result.Category);
      } catch (error) {
        console.log('Error while fetching categories', error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch subcategories and products for selected category
  useEffect(() => {
    const fetchSubcategoriesAndProducts = async () => {
      if (selectedCategory) {
        try {
          const subcategoryResponse = await axios.post(
            'http://esptiles.imperoserver.in/api/API/Product/DashBoard',
            {
              CategoryId: selectedCategory.ID,
              PageIndex: 2,
            },
          );
          const subcategoryData = subcategoryResponse.data.Result;

          setSubcategories(subcategoryData.Subcategories);

          const productResponse = await axios.post(
            'http://esptiles.imperoserver.in/api/API/Product/ProductList',
            {
              PageIndex: 2,
              SubCategoryId: subcategoryData.Subcategories[0].ID, // Assuming the first subcategory
            },
          );
          const productData = productResponse.data.Result;
          setProducts(productData.Products);
        } catch (error) {
          console.log('Error while fetching subcategories and products', error);
          setSubcategories([]);
          setProducts([]);
        }
      }
    };

    fetchSubcategoriesAndProducts();
  }, [selectedCategory]);

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const renderSubcategory = subcategory => (
    <View key={subcategory.ID} style={styles.subcategoryContainer}>
      <Text style={styles.subcategoryTitle}>{subcategory.Name}</Text>
      <FlatList
        horizontal
        data={products.filter(
          product => product.Subcategory === subcategory.Name,
        )}
        keyExtractor={item => item.ID.toString()}
        renderItem={({item}) => (
          <View style={styles.productContainer}>
            <View style={styles.productImage} />
            <Text style={styles.productName}>{item.Name}</Text>
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.item,
              item.ID === selectedCategory?.ID && styles.selectedItem, // Apply selected styles conditionally
            ]}
            onPress={() => handleCategorySelect(item)}>
            <Text
              style={[
                styles.itemText,
                item.ID === selectedCategory?.ID && styles.selectedItemText,
              ]}>
              {item.Name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.ID.toString()}
      />
      <View style={styles.subcategoryList}>
        {subcategories.map(subcategory => renderSubcategory(subcategory))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 50,
    borderRadius: 50,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    padding: 10,
  },
  selectedItem: {
    backgroundColor: 'black',
  },
  selectedItemText: {
    color: 'white',
  },
  subcategoryList: {
    marginTop: 20,
  },
  subcategoryContainer: {
    marginBottom: 10,
  },
  subcategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productContainer: {
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 20, // Add margin between each product
  },
  productImage: {
    width: 100, // Increase the size of the product box
    height: 100, // Increase the size of the product box
    backgroundColor: 'blue', // Sample color, replace with actual product image
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    color: 'black',
  },
});

export default CategorySelection;
