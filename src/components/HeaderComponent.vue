<template>
    <header class="w-100 d-flex justify-content-between align-items-center p-3">
        <div class="d-flex justify-content-between align-items-center ">
            <h1 class="text-danger text-uppercase me-3 mb-0">Boolflix</h1>
            <ul class="text-secondary d-flex justify-content-between mb-0 fs-5 list-unstyled gap-3">
                <li class="text-white cursor-pointer" @click="goHome">Home</li>
                <li class="cursor-pointer">Originali</li>
                <li class="cursor-pointer">Aggiunti di recente</li>
                <li class="cursor-pointer">La mia lista</li>
            </ul>
        </div>
        <div class="d-flex justify-content-between align-items-center ">
            <div v-if="!searchFlag" class="d-flex justify-content-between align-items-center gap-5">
                <i class="fa-solid fs-4 text-white fa-magnifying-glass cursor-pointer" @click="search()"></i>
                <div class="text-center">
                    <img :src="store.mainPagePropics[0]" alt="">
                    <p class="text-white m-0">{{ store.mainPagePropics[1] }}</p>
                </div>
                
            </div>
            <div class="d-flex justify-content-between" v-else>
                <input @keyup.enter="filterCards" class="mx-3 form-control" type="text" placeholder="Ricerca" v-model.trim="myQuery">
                <button @click="filterCards" class="btn btn-success">Invio</button>
            </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
    export default {
        name: 'HeaderComponent',
        data(){
            return {
                store,
                myQuery: '',
                searchFlag: false,
                movieGenreId: '',
            }
        },
        methods: {
            filterCards(){
                const url = store.apiUrl + this.store.endPoint.movie;
                const seriesUrl = store.apiUrl + this.store.endPoint.series;
                if(this.myQuery !== ''){
                    store.params.query = this.myQuery;
                    axios.get(url, {params: this.store.params}).then((res) => {
                        store.movieList = res.data.results;
                    });
                    axios.get(seriesUrl, {params: this.store.params}).then((res) => {
                        store.seriesList = res.data.results;
                    }) 
                };
                this.myQuery = '';
                store.flag = true;
            },
            goHome(){
                store.params.query = 'a';
                const seriesUrl = store.mostTrendingSeries;
                const url = store.mostTrendingMovies;
                axios.get(url + store.params.api_key).then((res) => {
                    store.movieList = res.data.results;
                });
                axios.get(seriesUrl + store.params.api_key).then((res) => {
                    store.seriesList = res.data.results;
                });
                store.flag = false;
            },
            search(){
                this.searchFlag = true;
            },
            filterGenre(){
                const url = store.genreUrl + store.params.api_key;
                axios.get(url).then((res) => {
                    store.filteredGenres = res.data.genres;
                    console.log(store.filteredGenres);
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
select {
    width: 150px;
}
img {
    height: 70px;
    width: 70px
}
header {
    position: fixed;
    top: 0;
    z-index: 8000;
    background-color: rgba($color: #000000, $alpha: 0.5);
    height: 100px;
}
h1 {
    text-shadow: 1px 1px 2px red, 0 0 10px white, 0 0 5px gray;
}
.cursor-pointer {
    cursor: pointer;
}
li:hover {
    color: white;
    text-shadow: 0 0 5px white;
    transition: all 1s;
}
</style>