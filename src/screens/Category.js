import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>category</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default Category