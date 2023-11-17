<template>
  <PreviewComponent v-if="!store.initialFlag"/>
  <div v-else >
    <HeaderComponent/>
    <div class="bg-dark ptop-100">
      <div class="p-3">
        <div class="row">
          <h2 class="text-white fs-1" v-if="!store.flag">Film in tendenza</h2>
          <h2 class="text-white fs-1" v-else>Film</h2>
          <CardComponent v-for="(item, index) in store.movieList" :thumb="store.imgUrl + item.poster_path" :title="item.title" :original-title="item.original_title" :lingua="item.original_language" :vote="Math.round(item.vote_average / 2)" :overview="item.overview" />
        </div>
        <div class="row">
          <h2 class="text-white fs-1" v-if="!store.flag">Serie TV in tendenza</h2>
          <h2 class="text-white fs-1" v-else>Serie TV</h2>
          <CardComponent v-for="item in store.seriesList" :thumb="store.imgUrl + item.poster_path" :title="item.name" :original-title="item.original_name" :lingua="item.original_language" :vote="Math.round(item.vote_average / 2)" :overview="item.overview"/>
        </div>
      </div>
    </div>
  </div>
  
  
</template>

<script>
import CardComponent from './components/CardComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import PreviewComponent from './components/PreviewComponent.vue';
import axios from 'axios';
import { store } from './data/store';
  export default {
    components: {
      CardComponent,
      HeaderComponent,
      PreviewComponent,
    },
    data(){
      return {
        store,
      }
    },
    methods: {
      getMovies(){
        const url = store.mostTrendingMovies;
        axios.get(url + store.params.api_key).then((res) => {
          store.movieList = res.data.results;
        });
      },
      getSeries(){
        const url = store.mostTrendingSeries
        axios.get(url + store.params.api_key).then((res) => {
          store.seriesList = res.data.results;
        });
      },
    },
    created(){
      this.getMovies();
      this.getSeries();
    }
  }
</script>

<style lang="scss" scoped>
.ptop-100{
  padding-top: 100px;
}
</style>