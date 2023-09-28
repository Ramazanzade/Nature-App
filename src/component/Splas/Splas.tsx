import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import splasscss from './splasscss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Splas = ({navigation}:any) => {
    return (
        <View style={splasscss.view}>
            <View style={splasscss.view1}>
                <View style={splasscss.view5}>
                    <View style={splasscss.imgview}>
                        <Image
                            source={require('../../asset/1.png')}
                            style={splasscss.img}
                        />
                    </View>
                    <View style={splasscss.textview}>
                        <Text style={splasscss.text1}>Welcome to Plant World</Text>
                        <Text style={splasscss.text2}>Feel Fresh a with plant Worlds.it will enhance your living space!</Text>
                    </View>
                </View >
                <View style={splasscss.view4}>
                <Text style={splasscss.text3}>Plant World</Text>
                </View>
            </View>
            <View style={splasscss.toucview}>
                <View style={splasscss.toucview2}>
                    <TouchableOpacity style={splasscss.touc} onPress={()=>navigation.navigate('HomeScreen', { screen: 'Home' })}>
                        <Text style={splasscss.text}>Get Started</Text>
                        <FontAwesomeIcon icon={faArrowRight} style={splasscss.icon} size={40} />
                    </TouchableOpacity>
                </View>
                <View style={splasscss.toucview1}>
                </View>
            </View>
            <View style={splasscss.view3}>
                <Image
                source={require('../../asset/2.png')}
                style={splasscss.img1}
                />
                <Image
                source={require('../../asset/3.png')}
                style={splasscss.img2}
                />
            </View>
        </View>
    )
}

export default Splas