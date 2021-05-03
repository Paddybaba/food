import React from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import SingleResult from './SingleResult'
import {withNavigation} from 'react-navigation'

const ResultList = ({title, results, navigation}) => {
    if (!results.length) return null

    return <View>
         <Text style= {styles.title}>{title}</Text>
         <Text style={styles.found}>Found : {results.length}</Text>
         <FlatList 
             horizontal
             showsHorizontalScrollIndicator = {false}
             data = {results}
             keyExtractor = {(result)=> result.id}
             renderItem = {({item})=>{
                 return (
                  <TouchableOpacity onPress={()=>{navigation.navigate('SingleBusiness', {id : item.id})}}>
                    <SingleResult item={item}/>
                  </TouchableOpacity>   
                 )
             }}
         />
</View>
}

const styles = StyleSheet.create({
    title:{
        marginTop:15,
        marginLeft: 15,
        fontSize : 18,
        fontWeight:"bold"
    },
    found:{
        marginLeft: 15,
        fontSize : 15,
        fontWeight:"bold"
    }
})

export default withNavigation(ResultList)