import axios from 'axios'

const TOKEN = 'ce89q4iad3i1ljtnqrggce89q4iad3i1ljtnqrh0'

export default axios.create ({
    baseURL: 'https://finnhub.io/api/v1',
    params: {
        token: TOKEN
    }
})