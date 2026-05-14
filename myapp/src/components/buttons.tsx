import { StyleSheet,Text,Image,View, TouchableOpacity, TouchableOpacityProps} from "react-native"

type ButtonProps = TouchableOpacityProps & {
    label: string;
}

export function Buttons({ label, ...rest }: ButtonProps){
    return(
        <TouchableOpacity style={style.container} {...rest} activeOpacity={0.7}>
            <View style={style.buttonContent}>
                <Text style={style.lbButton}>{label}</Text>
            </View>
            <View style={style.arrowContainer}>
                <Image  source={require('@/assets/arrow.png')}  />
            </View>
            
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
   container:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: 350,
        height: 52,
        backgroundColor: '#5F33E1',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
   },
   lbButton:{
        color: '#ffffff',
        fontWeight: 600,
        fontSize: 19,
   },
    buttonContent:{
        width: '65%',
        alignItems: 'flex-end',
    },
   arrowContainer:{
        width: '30%',
        alignItems: 'flex-end',
        padding: 10,
   }
})