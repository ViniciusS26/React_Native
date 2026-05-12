import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import  { Input } from '@/components/input'
import { Buttons } from '@/components/buttons'


export default function IndexPage(){
    return(
         <ScrollView style={{ flex: 1,}} contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
               
                    <Image style={styles.ilustrations} source={require("@/assets/logo.png")} />
                    <Text style={styles.title}>Entrar</Text>
                    <Text style={styles.description}>
                        Acesse sua conta com e-mail e senha
                    </Text>

                    <View style={styles.form}>
                        <Input placeholder="E-mail" keyboardType='email-address'/>
                        <Input placeholder="Senha" secureTextEntry/>
                        <Buttons label="Entrar"/>
                    </View>

                    <Text style={styles.register}>
                        Não tem uma conta? <Text style={styles.textTow}>Cadastre-se</Text>
                    </Text>
               
            </View>
         </ScrollView>
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
        height: 300,
        alignItems: 'center',
        marginTop: 40,
        resizeMode: 'contain',
    },

    title:{
        fontSize: 32,
        fontWeight: 900,
        color: '#0043c9f4',
    },

    description:{
        fontSize: 18,
        color: '#155882d6',
        fontWeight: 400,
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
    },

    textTow:{
        color: '#0043c9f4',
        fontWeight: 600,
    }
});
