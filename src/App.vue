<template>
  <PreviewComponent v-if="!store.initialFlag"/>
  <div v-else class="bg-dark">
    <div>
      <video class="w-100" autoplay>
        <source :src="randomTrailer()" type="video/mp4">
      </video>
    </div>
    <div class="easter" v-if="store.easterEggFlag" @click="toggleVideo()">
        <video autoplay class="easter-video">
            <source src="video/Eh-volevi.mp4" type="video/mp4">
        </video>
    </div>
    <HeaderComponent />
    <div class="ptop-100">
      <div class="p-3">
        <h2 class="text-white fs-1" v-if="!store.flag">Film in tendenza</h2>
        <h2 class="text-white fs-1" v-else>Film</h2>
        <div class="text-white d-flex justify-content-end gap-3">
          <i class="fa-solid fs-3 fa-arrow-left" @click="scollLeftMovie()"></i>
          <i class="fa-solid fs-3 fa-arrow-right" @click="scrollRightMovie()"></i>
        </div>
        <div ref="movieContainer" class="row scroll-behavior overflow-hidden flex-nowrap">
          <CardComponent @movie-cast="addMovieCredits($event, item)" @click="playVideo()" v-for="item in store.movieList" :thumb="item.poster_path" :title="item.title" :original-title="item.original_title" :lingua="item.original_language" :vote="Math.round(item.vote_average / 2)" :overview="item.overview" :id="item.id" :cast="item.cast"/>
        </div>
        <h2 class="text-white fs-1" v-if="!store.flag">Serie TV in tendenza</h2>
        <h2 class="text-white fs-1" v-else>Serie TV</h2>
        <div class="text-white d-flex justify-content-end gap-3">
          <i class="fa-solid fs-3 fa-arrow-left" @click="scrollLeftSeries()"></i>
          <i class="fa-solid fs-3 fa-arrow-right" @click="scrollRightSeries()"></i>
        </div>
        <div ref="seriesContainer" class="row scroll-behavior overflow-hidden flex-nowrap">
          <CardComponent @series-cast="addSeriesCredits($event, item)" @click="playVideo()" v-for="item in store.seriesList" :thumb="item.poster_path" :title="item.name" :original-title="item.original_name" :lingua="item.original_language" :vote="Math.round(item.vote_average / 2)" :overview="item.overview" :id="item.id" :cast="item.cast"/>
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
      addMovieCredits(cast, item){
        item.cast = cast;
      },
      addSeriesCredits(cast, item){
        item.cast = cast;
      },
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
      scrollRightMovie(){
        this.$refs.movieContainer.scrollBy(400, 0);
      },
      scollLeftMovie(){
        this.$refs.movieContainer.scrollBy(-400, 0);
      },
      scrollRightSeries(){
        this.$refs.seriesContainer.scrollBy(400, 0);
      },
      scrollLeftSeries(){
        this.$refs.seriesContainer.scrollBy(-400, 0);
      },
      playVideo(){
        store.easterEggFlag = true;
      },
      toggleVideo(){
        store.easterEggFlag = false;
      },
      getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },
      randomTrailer(){
        return store.randomVideo[this.getRndInteger(0, store.randomVideo.length - 1)];
      },
    },
    created(){
      this.getMovies();
      this.getSeries();
      this.randomTrailer();
    }
  }
</script>

<style lang="scss" scoped>
.easter {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.500);
    z-index: 1000;
}
.easter-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;
}
.scroll-behavior{
  scroll-behavior: smooth;
}
i {
  cursor: pointer;
}
.ptop-100{
  padding-top: 100px;
}
</style>