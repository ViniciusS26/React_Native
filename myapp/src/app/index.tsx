import { View, Text, StyleSheet, Image} from 'react-native'
import  { Input } from '@/components/input'


export default function IndexPage(){
    return(
        <View style={styles.container}>
           <Image style={styles.ilustrations} source={require("@/assets/logo.png")} />
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.description}>
                Acesse sua conta com Email e Senha
            </Text>
            <Input/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(185, 192, 255, 0.67)',
        padding: 32,
    },

    ilustrations:{
        width: "100%",
        height: 400,
        marginBottom: 32,
        alignItems: 'center',
        marginTop: 70,
  
    },

    title:{
        fontSize: 32,
        fontWeight: 900,
        color: '#0043c9f4',
    },

    description:{
        fontSize: 20,
        color: '#155882d6',
        fontWeight: 400,
      
    }
});
