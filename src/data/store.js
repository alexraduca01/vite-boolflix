import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    imgUrl: 'https://image.tmdb.org/t/p/w342',
    mostTrendingMovies: 'https://api.themoviedb.org/3/trending/movie/week?api_key=',
    mostTrendingSeries: 'https://api.themoviedb.org/3/trending/tv/week?api_key=',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv',
        credits: '/credits',
    },
    params: {
        api_key: 'fe198eea5146c018587f5b5a0ecadec9',
        query: 'a',
    },
    movieList: [],
    seriesList: [],
    movieCastList: [],
    seriesCastList: [],
    flags: {
        ita: 'https://flagsapi.com/IT/shiny/32.png',
        eng: 'https://flagsapi.com/GB/shiny/32.png',
        fra: 'https://flagsapi.com/FR/shiny/32.png',
        esp: 'https://flagsapi.com/ES/shiny/32.png',
    },
    movieCastUrl: 'https://api.themoviedb.org/3/movie/',
    flag: false,
    initialFlag: false,
    videoFlag: false,
})