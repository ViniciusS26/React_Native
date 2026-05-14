import { StyleSheet,Text,Image,View, TouchableOpacity, TouchableOpacityProps, Button} from "react-native"
import {  router} from 'expo-router'
import { MineButtons } from '@/components/mineButtons'
import CircularProgress from '@/components/circular'

export function StatusTask(){
    return(
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.lbStatus}>Your today’s task almost done!!</Text>
                <MineButtons  label="New Task"/>
            </View>
            <View style={style.containerProgress}>
                <CircularProgress percentage={80} />
            </View>
           
            <Image style={{width: 24, height: 24}} source={require('@/assets/image_menu.png')} />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        height: 155,
        backgroundColor: '#5F33E1',
        padding: 20,
        justifyContent: 'space-between',
        borderRadius: 21,
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    lbStatus:{
        color: '#ffffff',
        fontWeight: 400,
        fontSize: 16,
    },

    textContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width:'45%',
    },
    containerProgress:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'10%',
    },

})