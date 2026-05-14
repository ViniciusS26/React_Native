import { useState} from 'react'
import { View, Text, StyleSheet,ListRenderItem, Image, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.listStyle}>
                 <Text style={styles.title}>Header</Text>
                <Text style={styles.title}>Header</Text>
                <Text style={styles.title}>Header</Text>
                <Text style={styles.title}>Header</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    
        backgroundColor: '#5F33E1',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    listStyle:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: '300',
        color: '#fff',
        textAlign: 'center',
        
    }
})