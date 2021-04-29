import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import axios from 'axios'

const SearchScreen = () => {
    const [input, setInput] = useState ("");
    const [result, setResult] = useState(0);

    const searchApi = async () =>{
        const response = await yelp.get('/explore',{
            params : {
                client_id : "D0VRE15CAAQ5URYIFA45NFZCOAR4WPEBZH0RAZYEDNWF5JAA",
                client_secret : "XEPROY0N3GLA5FFLVVVLBQBGEUO3K0M0KB0EA1G31JUNU0QC",
                v:"20180323" ,
                ll:"40.7243,-74.0018",
                query:"pizza",
                limit:1
            }

        })
        console.log(response.data.response.totalResults)
        setResult(response.data.response.totalResults)
    }
return <View>
    <SearchBar 
        input={input}
        changeInput = {(newTerm) => setInput(newTerm)}
        onSubmit = {() => searchApi()}
                />
    <Text> Results : {result} </Text>
</View>
}

const styles = StyleSheet.create({})

export default SearchScreen