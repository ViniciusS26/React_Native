import { StyleSheet,Text, TouchableOpacity, TouchableOpacityProps} from "react-native"

type ButtonProps = TouchableOpacityProps & {
    label: string;
}

export function Buttons({ label, ...rest }: ButtonProps){
    return(
        <TouchableOpacity style={style.container} {...rest} activeOpacity={0.7}>
            <Text style={style.lbButton}>{label}</Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
   container:{
        width: "100%",
        height: 48,
        backgroundColor: '#0043c9f4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
   },
   lbButton:{
        color: '#ffffff',
        fontWeight: 600,
        fontSize: 16,
   }
})