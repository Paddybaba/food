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
        marginLeft: 15,
        marginTop : 15,
        width : 200,
        height : 210
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
        width : 200,
        height: 150,
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