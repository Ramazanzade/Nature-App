import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import homecss from './homecss';
import { useSelector } from 'react-redux';
const Home = () => {
    const data = useSelector((state: any) => state.natureReducer.value)
    const uniqueCategories = Array.from(
        new Set(data.map((item: any) => item.category))
    );

    const renderitem = (item: any) => {
        return (
            <TouchableOpacity style={homecss.touc} key={item}>
                <Text style={homecss.text1}>{item}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <View style={homecss.iconview}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faBarsStaggered} style={homecss.icon} size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={homecss.icon} size={30} />
                </TouchableOpacity>
            </View>
            <View style={homecss.textview}>
                <Text style={homecss.text}>Find the Perfect plant for your home</Text>
            </View>
            <View style={homecss.flatlsitview}>
                <FlatList
                    data={uniqueCategories}
                    renderItem={({ item }) => renderitem(item)}
                    // keyExtractor={(item: any) => item.id.toString()}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

export default Home