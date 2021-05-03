import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer wls7-9TSJFaBIMAGLzPLYPLDWmtHID5pPnUf0dznDuKffpSf3jCKYU5rkxxoufNAjqBWWURzzQjHeae2gJIPmgzovoruCZiGpXL5G29aGK3msCENz3fRyn7Vz1WKYHYx'
      }
});