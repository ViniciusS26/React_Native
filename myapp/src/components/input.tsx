import { TextInput,StyleSheet } from "react-native"

export function Input(){
    return <TextInput style={styleInput.stlInput}/>
}

Input.displayName ="Input"

const styleInput = StyleSheet.create({
    stlInput:{
        borderWidth: 1,
        borderColor: '#92b7ff',
        padding: 20,
        borderRadius: 8,
        
    }
   
})