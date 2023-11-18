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
    seriesCastUrl: 'https://api.themoviedb.org/3/tv/',
    flag: false,
    initialFlag: false,
    videoFlag: false,
    propics: ['https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.webp', 'https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp', 'img/iaio.png'],
    mainPagePropics: [],
    easterEggFlag: false,
})