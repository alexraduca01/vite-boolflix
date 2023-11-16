<template>
  <HeaderComponent/>
  <div class="bg-dark ptop-100">
    <div class="p-3">
      <div class="row">
        <h2 class="text-white fs-1">Film</h2>
        <CardComponent v-for="(item, index) in store.movieList" :thumb="store.imgUrl + item.poster_path" :title="item.title" :original-title="item.original_title" :lingua="item.original_language" :vote="Math.round(item.vote_average / 2)" :overview="item.overview" />
      </div>
      <div class="row">
        <h2 class="text-white fs-1">Serie TV</h2>
        <CardComponent v-for="item in store.seriesList" :thumb="store.imgUrl + item.poster_path" :title="item.name" :original-title="item.original_name" :lingua="item.original_language" :vote="Math.round(item.vote_average / 2)" :overview="item.overview"/>
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
        axios.get(url, { params: this.store.params }).then((res) => {
          store.movieList = res.data.results;
          for(let i = 0; i < store.movieList.length; i++){
            this.getCast(i);
          }
          console.log(store.movieCastList);
        });
      },
      getSeries(){
        const url = store.apiUrl + this.store.endPoint.series;
        axios.get(url, { params: this.store.params }).then((res) => {
          store.seriesList = res.data.results;
        });
      },
      getCast(index){
        const url = store.movieCastUrl + store.movieList[index].id + store.endPoint.credits + '?api_key=' + store.params.api_key;
        axios.get(url).then((res) => {
          store.movieCastList.push(res.data.cast.slice(0, 5));
        })
      }
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