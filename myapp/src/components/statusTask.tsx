import { StyleSheet,Text,Image,View, TouchableOpacity, TouchableOpacityProps, Button} from "react-native"
import {  router} from 'expo-router'
import { MineButtons } from '@/components/mineButtons'


export function StatusTask(){
    return(
        <View style={style.container}>
            <Text style={style.lbStatus}>Your today’s task almost done!!</Text>
            <MineButtons  label="New Task"/>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        
        display: 'flex',
        flexDirection: 'column',
        height: 148,
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
        fontWeight: 300,
        fontSize: 14,
    }
   
})