import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import SingleResult from './SingleResult'


const ResultList = ({title, results}) => {
return <View>
         <Text style= {styles.title}>{title}</Text>
         <Text>Found : {results.length}</Text>
         <FlatList 
             horizontal
             data = {results}
             keyExtractor = {(result)=> result.id}
             renderItem = {({item})=>{
                 return <SingleResult item={item}/>
                // <View style={styles.viewStyle}>
                //  <Image style={styles.imageStyle} source={{uri : item.image_url}}/>
                //  <Text style={styles.rating}>{item.rating}  <Feather style = {styles.icon} name="star"/></Text>
                //  <Text style={styles.businessName}>{item.name}</Text>
                //  </View>
             }}
         />
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

export default ResultList