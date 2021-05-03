import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const SingleResult = ({item}) => {
return   <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri : item.image_url}}/>
            <Text style={styles.rating}>{item.rating}  <AntDesign style = {styles.icon} name="star"/></Text>
            <Text style={styles.businessName}>{item.name}</Text>
        </View>

}

const styles = StyleSheet.create({
    viewStyle : {
        width : 170,
        height : 160
    },
    rating : {
        marginLeft : 10,
        color : 'black'
    },
    title:{
        fontSize : 18,
        fontWeight:"bold"
    },
    imageStyle : {
        width : 150,
        height: 100,
        borderRadius : 5
    },
    businessName : {
        fontWeight : "bold"
    },
    icon : {
        fontSize : 15,
        color : "#FFD700"
    }
})

export default SingleResult