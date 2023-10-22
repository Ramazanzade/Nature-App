import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass, faBarsStaggered , faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import homecss from './homecss';
import { useDispatch, useSelector } from 'react-redux';
import { nattureaction, toggleFavorite } from '../../store/feature/natureReducer';
const Home = ({navigation}:any) => {
    const data = useSelector((state: any) => state.natureReducer.value);
    // const uniqueCategories = Array.from(
    //     new Set(data.map((item: any) => item.category))
    // );
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState(null);

    // const handleItemPress = (item: any) => {
    //     setSelectedItem(item);
    // };
    const handle =(item2:any)=>{
        dispatch(toggleFavorite(item2.id))    
      }
      const handle2 = (data:any)=>{
        dispatch(nattureaction(data))    
        navigation.navigate('Home2Screen', { screen: 'Home2' })
      }
    // const renderItem = (item: any) => {
    //     const isSelected = selectedItem === item;
    //     const buttonStyle = [
    //         homecss.touc,
    //         isSelected ? homecss.touc2 : null,
    //     ];
    //     const button = [
    //         homecss.text1,
    //         isSelected ? homecss.text2 : null,
    //     ]
    //     return (
    //         <TouchableOpacity
    //             style={buttonStyle}
    //             key={item}
    //             onPress={() => handleItemPress(item)}
    //         >
    //             <Text style={button}>{item}</Text>
    //         </TouchableOpacity>
    //     );
    // };

    const rendertitem = (data: any, index: any) => {
        const isEvenIndex = index % 2 === 0;
        return (
            <View style={homecss.view}>
                {isEvenIndex ? (
                    <>
                        <View style={homecss.view1}>
                            <Text style={homecss.text3}>{data.name}</Text>
                            <Text style={homecss.text4}>{data.title}</Text>
                            <View style={homecss.view2}>
                                <Text style={homecss.text5}>$ {data.price}</Text>
                                <TouchableOpacity style={homecss.touc4} onPress={() => handle(data)}>
                                    <FontAwesomeIcon
                                        icon={data.isFavorite ? faCheck : faPlus}
                                        style={[homecss.icon1, { marginLeft: '12%' }]}
                                        color='rgba(5, 97, 3, 1)'
                                        size={27}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={homecss.view3}>
                            <TouchableOpacity style={homecss.touc3} onPress={()=>handle2(data)}>
                                <Image source={data.imge} style={homecss.img} />
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={homecss.view4}>
                            <TouchableOpacity style={homecss.touc3} onPress={()=>handle2(data)}>
                                <Image source={data.imge} style={homecss.img1} />
                            </TouchableOpacity>
                        </View>
                        <View style={homecss.view5}>
                            <Text style={homecss.text3}>{data.name}</Text>
                            <Text style={homecss.text4}>{data.title}</Text>
                            <View style={homecss.view2}>
                                <Text style={homecss.text5}>$ {data.price}</Text>
                                <TouchableOpacity style={homecss.touc4} onPress={() => handle(data)}>
                                    <FontAwesomeIcon
                                        icon={data.isFavorite ? faCheck : faPlus}
                                        style={[homecss.icon1, { marginLeft: '12%' }]}
                                        color='rgba(5, 97, 3, 1)'
                                        size={27}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                )}
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
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
                {/* <FlatList
                    data={uniqueCategories}
                    renderItem={({ item }) => renderItem(item)}
                    horizontal={true}
                /> */}
            </View>
            <View style={{flex:1}}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => rendertitem(item, index)}
                    keyExtractor={(item: any) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Home