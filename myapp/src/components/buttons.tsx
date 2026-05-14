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
                <Image style={style.arrowImage} source={require('@/assets/arrowP.png')}  />
            </View>
            
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
   container:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: 380,
        height: 54,
        backgroundColor: '#5F33E1',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 21,
        paddingHorizontal: 20,
        boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.09)',
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
   },
   arrowImage:{
        width: 24,
        height: 24,
   }
})