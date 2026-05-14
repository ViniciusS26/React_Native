import { View, Text, StyleSheet, Image} from 'react-native'

export default function Header(){
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require('@/assets/minhafoto.jpg')} />
            <View style={styles.conatinerHeader}>
                <View style={styles.listStyle}>
                    <Text style={styles.title}>Hello!</Text>
                    <Text style={styles.user}>Vinicius Nunes</Text>
                </View>
                <Image style={styles.imageNotification} source={require('@/assets/notification.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    conatinerHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyle: {
        borderRadius: 100,
        width: 50,
        height: 50,
    },
    imageNotification: {
        width: 24,
        height: 24,
  
    },
    listStyle:{
        paddingLeft: 15,
        flexDirection: 'column',
        alignItems:'flex-start'
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
    },
    user: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
    }
})