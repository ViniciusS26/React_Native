import { TextInput,StyleSheet, View} from "react-native"

export function Input(){
    return(
        <View>
            <TextInput placeholder="Email" style={styleInput.stlInput}/>
            <TextInput placeholder="Senha" style={styleInput.stlInput}/>

        </View>
    )
}

Input.displayName ="Input"

const styleInput = StyleSheet.create({
    stlInput:{
        borderWidth: 1,
        borderColor: '#92b7ff',
        padding: 20,
        borderRadius: 20,
        fontFamily: 'Roboto',
        fontSize: 16,
        marginBottom: 16,
     
    }
   
})