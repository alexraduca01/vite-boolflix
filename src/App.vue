<template>
  <HeaderComponent />
  <div class="bg-secondary">
    <div class="p-3">
      <div class="row">
        <h2 class="text-white fs-1">Film</h2>
        <CardComponent v-for="item in store.movieList" :thumb="store.imgUrl + item.poster_path" :title="item.title" :original-title="item.original_title" :lingua="item.original_language" :vote="item.vote_average"/>
      </div>
      <div class="row">
        <h2 class="text-white fs-1">Serie TV</h2>
        <CardComponent v-for="item in store.seriesList" :thumb="store.imgUrl + item.poster_path" :title="item.title" :original-title="item.original_title" :lingua="item.original_language" :vote="item.vote_average"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import CardComponent from './components/CardComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';
import { store } from './data/store';
  export default {
    components: {
      CardComponent,
      HeaderComponent,
    },
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