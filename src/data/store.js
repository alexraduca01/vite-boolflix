import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
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
    
})