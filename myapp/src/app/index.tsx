import { useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import  { Input } from '@/components/input'
import { Buttons } from '@/components/buttons'
import { Link, router} from 'expo-router'


export default function IndexPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function validateEmail(email: string) {
        const teste = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return teste.test(email);
    }

   

    function handleLogin(){
       
        if(!email || !password){
          Alert.alert("Erro", "Preencha todos os campos")
        }
        if(email && !validateEmail(email)){
           Alert.alert("Erro", "Por favor, insira um e-mail válido.")
        }
        if(email && validateEmail(email) && password){
            Alert.alert("Sucesso", "Login realizado com sucesso!")
            router.replace('/home')
        }
    }
    return(
        <KeyboardAvoidingView style={{ flex: 1}} behavior={Platform.select({ ios: 'padding', android: 'height' })}>
            <ScrollView  contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                <View style={styles.container}>
                
                        <Image style={styles.ilustrations} source={require("@/assets/logo.png")} />
                        <Text style={styles.title}>Entrar</Text>
                        <Text style={styles.description}>
                            Acesse sua conta com e-mail e senha.
                        </Text>

                        <View style={styles.form}>
                            <Input placeholder="E-mail" keyboardType='email-address' onChangeText={(text) => setEmail(text)}/>
                            <Input placeholder="Senha" secureTextEntry onChangeText={(pass)=>setPassword(pass)}/>
                            <Buttons label="Entrar"  onPress={handleLogin} />
                        </View>

                        <Text style={styles.register}>
                            Não tem uma conta?{""} <Link href="/signup"><Text style={styles.textTow}>Cadastre-se</Text></Link>
                        </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    scrollContent:{
        flexGrow: 1,     
    },
    container: {
        padding: 32,
    },

    ilustrations:{
        width: "100%",
        height: 350,
        alignItems: 'center',
        marginTop: 40,
        resizeMode: 'contain',
    },

    title:{
        fontSize: 36,
        fontWeight: 900,
        color: '#0043c9f4',
    },

    description:{
        fontSize: 16,
        color: '#155882d6',
        fontWeight: 300,
        marginBottom: 20,
      
    },

    form:{
        marginTop: 10,
        gap:5,
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
    }
});
