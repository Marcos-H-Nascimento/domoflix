import axios from 'axios'
// https://api.themoviedb.org/3/


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '73e0c5d469ef1bf05e2635687fee106f',
        language: 'pt-BR'
    }
})

export default api