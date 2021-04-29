import React from 'react'
import {Text, View, StyleSheet, TextInput, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({input, changeInput, onSubmit}) => {
return <View style = {styles.viewStyle}>
        <Feather style = {styles.icon} name="search"/>
        <TextInput  
            style = {styles.inputStyle}
            placeholder = "Search"
            autoCapitalize="none"
            autoComplete={false}
            value = {input}
            onChangeText = {(newText)=> changeInput(newText)}   
            onEndEditing = {() => onSubmit()} 
            />
</View>
}

const styles = StyleSheet.create({
    viewStyle : {
       backgroundColor : "#ADD8E6",
       height : 40,
       marginHorizontal : 20,
       marginTop: 5,
       borderRadius : 5,
       flexDirection : 'row' ,
       justifyContent : 'space-between'
    },
    icon : {
        margin : 5,
        fontSize : 30
    },
    inputStyle : {
        flex : 1,
        fontSize : 20,       
    }
})

export default SearchBar