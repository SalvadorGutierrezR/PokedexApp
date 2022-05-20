import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react'

const Loading = () => {
  return (
    <View style={ styles.activityContainer }>
        <ActivityIndicator
            size={50}
            color='grey'
        />
        <Text style={{color: 'black'}}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})