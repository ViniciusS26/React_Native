import { TextInput,StyleSheet, View, TextInputProps} from "react-native"

export function Input(props: TextInputProps){
    return(
        <View>
            <TextInput  style={styleInput.stlInput} {...props}/>
        </View>
    )
}



const styleInput = StyleSheet.create({
    stlInput:{
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: '#92b7ff',
        padding: 10,
        borderRadius: 10,
        fontFamily: 'Roboto',
        fontSize: 14,
        margin: 5,
        
    },
})