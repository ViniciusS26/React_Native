import { useState} from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import  { Input } from '@/components/input'
import { Buttons } from '@/components/buttons'
import { Link, router } from 'expo-router'
import Header from '@/components/header'
import { StatusTask } from '@/components/statusTask'

const dataProgress = [
    {
        title: 'Projeto 1',
        description: 'Descrição do projeto 1',
        percent: 50,
    },
    {
        title: 'Projeto 2',
        description: 'Descrição do projeto 2',
        percent: 75,
    },
    {
        title: 'Projeto 3',
        description: 'Descrição do projeto 3',
        percent: 50,
    },
    {
        quantidade:3,
    }
]

type ItemsProps ={
    title: string;
    description: string;
    percent: number;
}
export default function HomePage(){
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1, width: '100%'}} keyboardShouldPersistTaps='handled'>
            <Header />
            <StatusTask />
            <Text style={styles.title}> In Progress { } 6</Text>
            <View style={styles.styleProgress}  >
                <View style={styles.styleProjetcInprogress}  >
                   
                </View>
            </View>

            <View style={styles.container}>
                <Link href="/">
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
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 22,
    },

    styleProgress: {
        marginTop: 16,
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginLeft: 22,
        borderRadius: 5,
        height: 150,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    styleProjetcInprogress: {
        width: 202,
        height: 116,
        borderRadius: 19,
        marginRight: 10,
    }
})