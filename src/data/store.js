import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    imgUrl: 'https://image.tmdb.org/t/p/w342',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv',
    },
    params: {
        api_key: 'fe198eea5146c018587f5b5a0ecadec9',
        query: 'a',
    },
    movieList: [],
    seriesList: [],
    flags: {
        ita: 'https://flagsapi.com/IT/shiny/32.png',
        eng: 'https://flagsapi.com/GB/shiny/32.png',
        fra: 'https://flagsapi.com/FR/shiny/32.png',
        esp: 'https://flagsapi.com/ES/shiny/32.png',
    }
    
})