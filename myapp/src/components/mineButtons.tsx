import { StyleSheet,Text,Image,View, TouchableOpacity, TouchableOpacityProps} from "react-native"


export function MineButtons({ label, ...rest }: TouchableOpacityProps & { label: string }){
    return(
        <TouchableOpacity style={style.container} {...rest} activeOpacity={0.7}>
            <View style={style.buttonContent}>
                <Text style={style.lbButton}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#EEE9FF',
      
        borderRadius: 10,
        width: 110,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

       
    },
    buttonContent:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    lbButton:{
        color: '#4020a1',
        fontWeight: 'bold',
        fontSize: 14,
    },
    arrowContainer:{
        position: 'absolute',
        right: 10,
        top: 10,
    },
    arrowImage:{
        width: 20,
        height: 20,
    }
})