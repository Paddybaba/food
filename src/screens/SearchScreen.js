import React, {useState} from 'react'
import { useEffect } from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen = () => {
    const [input, setInput] = useState ("");
    const [results, searchAPI, errMsg] = useResult();

    const filterResult = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        })
    }        
    // const [result, setResult] = useState("Results here");

    // const searchApi = async () =>{
    //     try{
    //         const response  = await yelp.get('/businesses/search', {
    //             params : {
    //                 location : "new york",
    //                 term : {input},
    //                 limit : 5
    //             }
    //         })
    //         setResult(response.data.businesses[0].name)
    //         console.log(response.data)
    //         // const response = await axios.get('https://api.foursquare.com/v2/venues/explore',{
    //         //     params : {
    //         //         client_id : "D0VRE15CAAQ5URYIFA45NFZCOAR4WPEBZH0RAZYEDNWF5JAA",
    //         //         client_secret : "XEPROY0N3GLA5FFLVVVLBQBGEUO3K0M0KB0EA1G31JUNU0QC",
    //         //         v:"20180323" ,
    //         //         near : "nagpur",
    //         //         query:input,
    //         //         limit:5
    //         //     }
    
    //         // })
    //         // console.log(response.data.response.groups[0].items[2])
    //         // setResult(response.data.response.groups[0].items[0].venue.name)
    //     } catch (err){
    //         console.log(err)
    //         setResult("Error occured")
    //     }
      

return ( 
<>
    <SearchBar 
        input={input}
        changeInput = {(newTerm) => setInput(newTerm)}
        onSubmit = {() => searchAPI(input)}
                />
    {errMsg ? <Text>Some error Occured</Text> : null}
    <ScrollView>    
        <ResultList  results={filterResult('$')} title="Economy Class"/>
        <ResultList  results={filterResult('$$')} title="Budget Class"/>
        <ResultList  results={filterResult('$$$$')} title="Deluxe"/>
        <ResultList  results={filterResult('$$$$')} title="Premium"/>
    </ScrollView>
    
    
</>
)
}

const styles = StyleSheet.create({

})

export default SearchScreen