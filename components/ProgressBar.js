import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar as Progress } from 'react-native-paper';

const ProgressBar = (props) => {
    return (
        <View>
            <Progress progress={0.5} color="#fff" style={styles.progress} />
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    progress: {
        height: 10,
        borderRadius: 10,
    }
})
