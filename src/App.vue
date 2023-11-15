<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';
import { store } from './data/store';
  export default {
    data(){
      return {
        store,
      }
    },
    methods: {
      getMovies(){
        const url = store.apiUrl + this.store.endPoint.movie;
        console.log(url);
        axios.get(url, { params: this.store.params }).then((res) => {
          store.movieList = res.data.results;
          console.log(store.movieList);
        });
      },
      getSeries(){
        const url = store.apiUrl + this.store.endPoint.series;
        console.log(url);
        axios.get(url, { params: this.store.params }).then((res) => {
          store.seriesList = res.data.results;
          console.log(store.seriesList);
        });
      }
    },
    created(){
      this.getMovies();
      this.getSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>