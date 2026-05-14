
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import { Buttons } from '@/components/buttons'
import {  router} from 'expo-router'

export default function IndexPage(){
   
    function handleLogin(){
        return router.replace('/home')
    }
    return(
        <KeyboardAvoidingView style={{ flex: 1}} behavior={Platform.select({ ios: 'padding', android: 'height' })}>
            <ScrollView  contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                <View style={styles.container}>
                    <Image style={styles.ilustrations} source={require("@/assets/image.png")} />
                    <Text style={styles.title}>Task Management & To-Do List </Text>
                    <Text style={styles.description}>
                        This productive tool is designed to help you better manage your task project-wise conveniently!
                    </Text>
                    <View style={styles.buttonStyle}>
                        <Buttons label="Let's Start"  onPress={handleLogin}/>
                     </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        fontFamily:'Monrope',
    },

    ilustrations:{
        width: 250,
        height: 300,
        alignItems: 'center',
        fontFamily:'Lexend Deca, Sans-Serif',
        resizeMode: 'contain',
    },
    title:{
        marginTop: 180, 
        fontSize: 30,
        fontWeight: 900,
        textAlign: 'center',
        color: '#24252C'
    },
    description:{
        marginTop: 20,
        fontSize: 18,
        color: '#8d8d8df4',
        textAlign: 'center',
        width:'100%',
        fontWeight: 300,
    },

    buttonStyle:{
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    register:{
        marginTop:20,
        color: '#8d8d8df4',
        fontWeight: 600,
        textAlign: 'center',
    },

    textTow:{
        color: '#0043c9f4',
        fontWeight: 600,
    },
    
});
