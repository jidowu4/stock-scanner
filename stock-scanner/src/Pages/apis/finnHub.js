import axios from 'axios'

const TOKEN = 'cjjdie1r01qirue67l0gcjjdie1r01qirue67l10'

//add the token here so we do not have to keep manually inserting token in each call to API

export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token: TOKEN
    }
})
//will always set this as the baseURL


