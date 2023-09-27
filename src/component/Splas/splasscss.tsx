import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    view: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    view1: {
        width: '80%',
        backgroundColor: 'green',
        position: 'absolute',
        zIndex: 1,
        height: '60%',
        marginTop: '10%',
        marginLeft: '20%',
        borderTopStartRadius: 50,
        borderBottomLeftRadius: 50
    },
    touc: {
        position: 'absolute',
        zIndex: 3,
        borderRadius: 70,
        backgroundColor: '#ffffff',
        width: 350,
        height: 80,
        marginTop:3,
        marginBottom:7
    },
    toucview2: {
        position: 'absolute',
        zIndex: 5
    },
    text: {
        fontSize: 40,
        marginLeft:'15%',
        marginTop:'3%'
    },
    view3: {
        width: '70%',
        backgroundColor: 'green',
        position: 'absolute',
        zIndex: 1,
        height: '30%',
        marginLeft: '30%',
        marginTop: '150%',
        borderTopStartRadius: 50,


    },
    toucview: {
        marginTop: '130%',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    toucview1: {
        height: 100,
        backgroundColor: 'green',
        width: 200,
        marginLeft: '60%'
    }
})