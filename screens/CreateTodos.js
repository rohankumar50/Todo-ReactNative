import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../components/Constants';
import ProgressBar from '../components/ProgressBar';
import CurrentDate from '../components/CurrentDate';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo } from '../redux/actions/todoActions/TodoActions';
import TodoItem from '../components/TodoItem';
import CurrentTimeDate from '../components/CurrentTimeDate'
import { TextInput } from 'react-native-gesture-handler';

const CreateTodos = () => {
    const [date, setDate] = useState("")

    useEffect(() => {
        const monthNames = ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE",
            "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        const d = new Date();
        setDate(monthNames[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear());
    }, [])

    const todayDay = CurrentTimeDate

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContentImage}>
                    <Image source={require('../assets/human_CreateTodo.png')} style={styles.icon} />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Create Your Todo</Text>
                    <Text style={styles.day}>{CurrentTimeDate}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>

            </View>
            <View style={styles.content}>
                {/* <Text style={{ color: '#111' }}>todays todos</Text> */}
                <TextInput placeholder="Title" placeholderTextColor='#BDBDBD' style={styles.title} />
                <TextInput placeholder="Want to write something about that" placeholderTextColor='#BDBDBD' multiline={true} style={styles.description} />

            </View>
        </View>
    )
}

export default CreateTodos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F50057',
    },

    header: {
        flex: 1,
        padding: Constants.PAGE_LAYOUT.paddingHorizontal,
        alignItems: 'center'
    },

    headerContent: {
        alignItems: 'center'
    },

    headerContentImage: {
        paddingLeft: 5,
    },

    headerText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },

    icon: {
        height: 150,
        width: 100
    },
    day: {
        fontSize: 42,
        color: '#fff'
    },
    date: {
        color: '#fff',
        fontSize: 18
    },
    content: {
        flex: 1.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: Constants.PAGE_LAYOUT.paddingHorizontal
    },

    title: {
        backgroundColor: '#EEEEEE',
        color: '#111',
        fontWeight: '500',
        padding: 10,
        borderRadius: 8,
        marginTop: 25,
        shadowRadius: 3,
        shadowColor: '#BDBDBD',
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.2,
    },
    description: {
        flexDirection: 'column',
        backgroundColor: '#EEEEEE',
        color: '#111',
        padding: 10,
        fontWeight: '500',
        borderRadius: 8,
        marginTop: 25,
        height: 200,
        justifyContent: "flex-start",
        textAlignVertical: 'top'
    }
})
