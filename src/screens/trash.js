// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Categorydata = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [subcategories, setSubcategories] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://esptiles.imperoserver.in/api/API/Product/DashBoard');
//       setCategories(response.data.Result.Category);
//     } catch (error) {
//       console.log('Error while fetching the data', error);
//     }
//   };

//   const fetchSubcategoriesAndProducts = async (selectedCategory) => {
//     try {
//       const response = await axios.get(`http://esptiles.imperoserver.in/api/API/Product/ProductList?category=${selectedCategory.ID}`);
//       setSubcategories(response.data.Result.Subcategories);
//       setProducts(response.data.Result.Products);
//     } catch (error) {
//       console.log('Error while fetching subcategories and products', error);
//       setSubcategories([]);
//       setProducts([]);
//     }
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     fetchSubcategoriesAndProducts(category);
//   };

//   return (
//     <View>
//       {categories && categories.length > 0 ? (
//         <FlatList
//           horizontal
//           data={categories}
//           keyExtractor={(item, index) => item.ID.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.dataStyle}>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => handleCategorySelect(item)}>
//                 <Text style={styles.dataText}>{item.Name}</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       ) : (
//         <Text>No categories found</Text>
//       )}

//       {selectedCategory && (
//         <View>
//           <Text>Selected Category: {selectedCategory.Name}</Text>
//           {subcategories && subcategories.length > 0 ? (
//             subcategories.map((subcategory, index) => (
//               <View key={index}>
//                 <Text>{subcategory.Name}</Text>
//                 <FlatList
//                   horizontal
//                   data={products.filter(product => product.Subcategory === subcategory.Name)}
//                   keyExtractor={(item, index) => index.toString()}
//                   renderItem={({ item }) => (
//                     <View style={styles.productContainer}>
//                       <Image
//                         source={{ uri: item.Image }} 
//                         style={styles.productImage}
//                       />
//                       <Text>{item.Name}</Text>
//                     </View>
//                   )}
//                 />
//               </View>
//             ))
//           ) : (
//             <Text>No subcategories found</Text>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   dataStyle: {
//     margin: 10,
//   },
//   dataText: {
//     color: 'white',
//   },
//   button: {
//     borderWidth: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: 'flex-start',
//     marginLeft: 1,
//     borderRadius: 100,
//   },
//   productContainer: {
//     margin: 10,
//     alignItems: 'center',
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     resizeMode: 'cover',
//   },
// });

// export default Categorydata;