// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useSelector } from 'react-redux'
// import home2css from './home2css'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faArrowLeft, faTemperatureLow, faArrowsUpDown, faSun } from '@fortawesome/free-solid-svg-icons';
// const Home2 = ({navigation}:any) => {
//   const data = useSelector((state: any) => state.natureReducer.value)
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={home2css.view}>
//         <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen', { screen: 'Home' })}>
//           <FontAwesomeIcon
//             icon={faArrowLeft}
//             style={[home2css.icon1]}
//             color='#ffffff'
//             size={37}
//           />
//         </TouchableOpacity>
//         <View style={home2css.view1}>
//           <Text style={home2css.text}>{data.name}</Text>
//           <View style={home2css.view4}>
//             <FontAwesomeIcon icon={faTemperatureLow} style={[home2css.icon2]} color='#ffffff' size={27} />
//             <View style={home2css.view3}>
//               <Text style={home2css.text2}>Temperature</Text>
//               <Text style={home2css.text3}>{data.tem} C</Text>
//             </View>
//           </View>
//           <View style={home2css.view4}>
//             <FontAwesomeIcon icon={faArrowsUpDown} style={[home2css.icon2]} color='#ffffff' size={27} />
//             <View style={home2css.view3}>
//               <Text style={home2css.text2}>Height</Text>
//               <Text style={home2css.text3}>{data.hei} cm</Text>
//             </View>
//           </View>
//           <View style={home2css.view4}>
//             <FontAwesomeIcon icon={faSun} style={[home2css.icon2]} color='#ffffff' size={27} />
//             <View style={home2css.view3}>
//               <Text style={home2css.text2}>Light</Text>
//               <Text style={home2css.text3}>{data.lig} h</Text>
//             </View>
//           </View>
//         </View>
//         <View style={home2css.view5}>
//           <Text style={home2css.text4}>BONSAI PLANT</Text>
//         </View>
//       </View>
//       <View style={home2css.view6}>
//         <Image
//           source={data.imge}
//           style={home2css.img}
//         />
//       </View>
//       <View style={home2css.view7}>
//         <Text style={home2css.text1}>Details</Text>
//         <Text style={home2css.text5}>{data.description}</Text>
//       </View>
//       <View style={home2css.view8}>
//         <Text style={home2css.text6}>$ {data.price}</Text>
//         <TouchableOpacity style={home2css.touc}>
//           <Text style={home2css.text7}>BUY</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default Home2