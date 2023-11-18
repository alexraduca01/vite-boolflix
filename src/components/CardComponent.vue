<template>
    <div class="col-2 flex-direction-start my-5 flip-card" @mouseenter="getCredits(), getSeriesCredits()">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="noImg()" class="w-100 card-img" :alt="title" />
          </div>
          <div class="flip-card-back fs-5" @click="playZeb()">
            <h3 class="text-success">Titolo: {{ title }}</h3>
            <h4>Titolo originale: {{ originalTitle }}</h4>
            <p v-if="!flag">Lingua: {{ lingua }}</p>
            <div v-else >
              <span>Lingua: </span>
              <img :src="myFlag" alt="" />
            </div>
            <ul class="list-unstyled">
              <li class="fs-4">Cast: </li>
              <li v-for="item in cast">{{ item }}</li>
            </ul>
            <div>
              <span>Voto: </span>
              <span v-for="n in 5">
                <i v-if="n <= vote" class="fa-solid text-warning fa-star"></i>
                <i v-else class="fa-regular fa-star"></i>
              </span>
            </div>
            <p>{{ overview }}</p>
          </div>
      </div>
      
    </div>
</template>

<script>
import axios from 'axios';
import { store } from "../data/store";
export default {
  name: "CardComponent",
  props: {
    thumb: String,
    title: String,
    originalTitle: String,
    lingua: String,
    vote: Number,
    overview: String,
    id: Number,
    cast: Array,
  },
  data() {
    return {
      store,
      myFlag: "",
      flag: false,
      starFlag: false,
    };
  },
  methods: {
    postStars() {
      if (this.vote > 0) {
        this.starFlag = true;
      }
    },
    changeFlag() {
      if (this.lingua === "en") {
        this.flag = true;
        this.myFlag = store.flags.eng;
      } else if (this.lingua === "it") {
        this.flag = true;
        this.myFlag = store.flags.ita;
      } else if (this.lingua === "fr") {
        this.flag = true;
        this.myFlag = store.flags.fra;
      } else if (this.lingua === "es") {
        this.flag = true;
        this.myFlag = store.flags.esp;
      }
    },
    noImg(){
      if(this.thumb){
        return store.imgUrl + this.thumb;
      } else {
        return 'https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg';
      }
    },
    getCredits(){
      if(this.cast && this.cast.length > 0){
        return
      }
      let cast = [];
      const url = store.movieCastUrl + this.id + store.endPoint.credits + '?api_key=' + store.params.api_key;
      axios.get(url).then((res) => {
        for(let i = 0; i < 5; i++){
          if(res.data.cast[i]){
            cast.push(res.data.cast[i].name);
          }
        }
        this.$emit('movieCast', cast);
      })
    },
    getSeriesCredits(){
      if(this.cast && this.cast.length > 0){
        return
      }
      let cast = [];
      const url = store.seriesCastUrl + this.id + store.endPoint.credits + '?api_key=' + store.params.api_key;
      axios.get(url).then((res) => {
        for(let i = 0; i < 5; i++){
          if(res.data.cast[i]){
            cast.push(res.data.cast[i].name);
          }
        }
        this.$emit('seriesCast', cast);
      })
    }
  },
  created() {
    this.changeFlag();
    this.postStars();
  },
};
</script>

<style lang="scss" scoped>
.card-img {
  height: 100%;
}
.flip-card {
    background-color: transparent;
    perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-back {
    position: absolute;
    top: 0;
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    overflow-y: auto;
    padding: 2rem;
}
.flip-card-back::-webkit-scrollbar{
  display: none;
}
</style>
