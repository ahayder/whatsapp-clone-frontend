import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-clone-backend-ahayder.herokuapp.com'
})

export default instance