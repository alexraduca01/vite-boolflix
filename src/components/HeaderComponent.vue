<template>
    <header class="w-100 d-flex justify-content-between align-items-center p-3 bg-black">
        <div>
            <h1 class="text-danger text-uppercase">Boolflix</h1>
        </div>
        <div class="d-flex justify-content-between">
            <input @keyup.enter="filterCards" class="mx-3 form-control w-75" type="text" v-model.trim="myQuery">
            <button @click="filterCards" class="btn btn-success">Invio</button>
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
            },    
        }
    }
</script>

<style lang="scss" scoped>

</style>