import axios from 'axios'

const API_URL = 'https://covid19.mathdro.id'
const API = {}

API.getWorldData = () => {
    return axios.get(`${API_URL}/api`)
}

export {
    API
}