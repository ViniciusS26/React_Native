import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import  { Input } from '@/components/input'
import { Buttons } from '@/components/buttons'
import { Link } from 'expo-router'

export default function Signup(){
    return(
        <KeyboardAvoidingView style={{ flex: 1}} behavior={Platform.select({ ios: 'padding', android: 'height' })}>
            <ScrollView  contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                <View style={styles.container}>
                
                        <Image style={styles.ilustrations} source={require("@/assets/img4.jpg")} />
                        <Text style={styles.title}>Cadastre-se</Text>
                        <Text style={styles.description}>
                            Crie sua conta para acessar o aplicativo.
                        </Text>

                        <View style={styles.form}>
                            <Input placeholder="Nome" />
                            <Input placeholder="E-mail" keyboardType='email-address'/>
                            <Input placeholder="Senha" secureTextEntry/>
                            <Input placeholder="Confirmar Senha" secureTextEntry/>

                            <Buttons label="Cadastre-se"/>
                        </View>

                        <Text style={styles.register}>
                            Já tem uma conta?{""} <Link href="/"><Text style={styles.textTow}>Entrar</Text></Link>
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
        height: 280,
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
