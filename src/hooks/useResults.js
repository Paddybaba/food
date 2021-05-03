import {useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default useResult = () =>{
    const [results, setResults] = useState([])
    const [errMsg , setErrMsg] = useState('')

    const searchAPI = async (term) =>{
        try{
            const response = await yelp.get('/search',{
                params:{
                    term,
                    location : "San Jose",
                    limit : 50
                }
            })
            // console.log(response.data)
            setResults(response.data.businesses)
        }catch(err){
            setErrMsg("some error occurred")
      }
     
    
    }
    useEffect (()=>{searchAPI("pasta")}, [])
    return [results, searchAPI, errMsg]
}