import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    view: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    view1: {
        width: '80%',
        backgroundColor: 'rgba(12, 88, 0, 1)',
        position: 'absolute',
        zIndex: 1,
        height: '58%',
        marginTop: '15%',
        marginLeft: '20%',
        borderTopStartRadius: 50,
        borderBottomLeftRadius: 50,
        display: 'flex',
        flexDirection: 'row'
    },
    touc: {
        position: 'absolute',
        zIndex: 3,
        borderRadius: 70,
        backgroundColor: '#ffffff',
        width: 350,
        height: 80,
        marginTop: 3,
        marginBottom: 7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    icon: {
        color: '#056103',
        marginTop: '6%'
    },
    toucview2: {
        position: 'absolute',
        zIndex: 5
    },
    text: {
        fontSize: 40,
        marginTop: '3%',
        color: '#056103',
        fontWeight: '700'
    },
    view3: {
        width: '70%',
        backgroundColor: 'rgba(12, 88, 0, 1)',
        position: 'absolute',
        zIndex: 1,
        height: '30%',
        marginLeft: '30%',
        marginTop: '150%',
        borderTopStartRadius: 50,
        display: 'flex',
        flexDirection: 'row'
    },
    toucview: {
        marginTop: '130%',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    toucview1: {
        height: '30%',
        backgroundColor: 'rgba(12, 88, 0, 1)',
        width: '50%',
        marginLeft: '60%'
    },
    imgview: {

    },
    img: {
        margin: '-18%',
        marginLeft: '-20%'
    },
    textview: {
        width: "70%",
        marginLeft: '15%',
        marginTop: '-18%'
    },
    text1: {
        fontSize: 30,
        color: '#FFFFFF'
    },
    text2: {
        color: 'gray',
        marginTop: '3%'
    },
    view4: {
        marginLeft: '-66%'
    },
    view5: {

    },
    text3: {
        transform: [{ rotate: '-90deg' }],
        fontSize: 90,
        marginTop: '40%',
        color: 'rgba(17, 193, 14, 0.28)'
    },
    img1: {
        width: 170,
        height: 150,
        marginTop: '17%',
        margin: '3%'
    },
    img2:{
        marginTop: '10%',
    }

})