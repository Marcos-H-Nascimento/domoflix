import api from "./api"


const movies = {
    popular: () => api.get('/movie/popular'),
    topRated: () => api.get('/movie/top_rated'),
    trendingThisWeek: () => api.get('/trending/movie/week'),
    upComing: () => api.get('/movie/upcoming'),
    discover: () => api.get('/discover/movie'),
    trendingToday: ()=> api.get('/trending/movie/day'),

    getById: (id) => api.get(`/movie/${id}`)
}

export default movies