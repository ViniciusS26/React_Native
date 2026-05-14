import { useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import  { Input } from '@/components/input'
import { Buttons } from '@/components/buttons'
import { Link, router } from 'expo-router'
import Header from '@/components/header'
import { StatusTask } from '@/components/statusTask'

export default function HomePage(){
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <Header />
            <StatusTask />
            <View style={styles.container}>
                <Link href="/" style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Ir para a página inicial</Text>
                </Link>
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
 
         color: '#24252C',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    }
})