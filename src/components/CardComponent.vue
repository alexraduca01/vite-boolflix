<template>
    <div class="col-2 my-5 flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="thumb" class="w-100 card-img" :alt="title" />
        </div>
        <div class="flip-card-back fs-5">
          <h3 class="text-success">Titolo: {{ title }}</h3>
          <h4>Titolo originale: {{ originalTitle }}</h4>
          <p v-if="!flag">Lingua: {{ lingua }}</p>
          <div v-else >
            <span>Lingua: </span>
            <img :src="myFlag" alt="" />
          </div>
          <p v-if="!starFlag"><i class="fa-regular fa-star"></i></p>
          <div>
            <span>Voto: </span>
            <i v-for="n in vote" class="fa-solid fa-star text-warning"></i>
          </div>
          <p>{{ overview }}</p>
        </div>
      </div>
    </div>
</template>

<script>
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
  },
  data() {
    return {
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
  },
  created() {
    this.changeFlag();
    this.postStars();
  },
};
</script>

<style lang="scss" scoped>
.card-img {
  height: 770.69px;
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
</style>
