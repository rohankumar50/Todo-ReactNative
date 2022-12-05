import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CurrentDate = () => {
    const [date, setDate] = useState("")

    useEffect(() => {
        const monthNames = ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE",
            "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        const d = new Date();
        setDate(monthNames[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear());
    }, [])
    return (
        <View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default CurrentDate

const styles = StyleSheet.create({

    date: {
        color: "#fff",
    },
})
