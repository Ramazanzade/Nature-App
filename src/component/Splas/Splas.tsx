import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import splasscss from './splasscss'

const Splas = () => {
    return (
        <View style={splasscss.view}>
            <View style={splasscss.view1}>
            </View>
            <View style={splasscss.toucview}>
                <View style={splasscss.toucview2}>
                    <TouchableOpacity style={splasscss.touc}>
                        <Text style={splasscss.text}>Get Start</Text>
                    </TouchableOpacity>
                </View>
                <View style={splasscss.toucview1}>
                </View>
            </View>
            <View style={splasscss.view3}></View>
        </View>
    )
}

export default Splas