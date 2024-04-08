import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Categorydata from '../components/Categorydata'

const Category = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* // Header */}
        <View style={styles.header}>
            <Text style={styles.headerText}>ES TILES</Text>
           
        </View>

        <View>

        <Categorydata />
        <Text>Data</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 16,
        height: 100,
    },

    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    }
})

export default Category