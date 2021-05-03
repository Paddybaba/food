import React from 'react'
import {Text, View, StyleSheet, Image, FlatList} from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development'
import yelp from '../api/yelp'
import { Feather, Entypo } from '@expo/vector-icons';

const SingleBusinessDetails =  ({navigation}) => {
    const [result, setResult] = useState(null)

    const id = navigation.getParam('id')

    const getBusinessDetails = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    
    useEffect (() => {getBusinessDetails(id)},[])

    return result ? <View style = {styles.viewStyle}>
                        <Text style = {styles.title} >{result.name}</Text>
                        <Text> <Feather name="phone" size={16} color="black" />  :  {result.phone}</Text>
                        <Text> <Entypo name="address" size={13} color="black" /> :  {result.location.display_address[0]}</Text>
                        <FlatList 
                            data = {result.photos}
                            keyExtractor = {(item) => item}
                            renderItem = {({item}) => {
                                return <Image style = {styles.imageStyle} source = {{uri : item}}/>
                            }}
                        />
                        </View>
                : null 

}

const styles = StyleSheet.create({
    viewStyle : {
        alignItems : 'center'
    },
    title : {
        fontSize : 25,
        fontWeight : "bold"
    },
    imageStyle : {
        marginVertical : 10,
        width: 350,
        height : 200,
        borderRadius : 5,
        shadowColor : 'black',
    }
})

export default SingleBusinessDetails