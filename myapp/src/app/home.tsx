import { useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import  { Input } from '@/components/input'
import { Buttons } from '@/components/buttons'
import { Link } from 'expo-router'

export default function HomePage(){
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f0f0f0',
    }, 

    title:{
        fontSize: 24,
        fontWeight: 'bold',
    }
})