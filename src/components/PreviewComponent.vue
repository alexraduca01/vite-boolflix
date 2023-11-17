<template>
    <div v-if="!store.videoFlag" class="w-100 vh-100 bg-black">
        <div class="main-container">
            <div class="text-center">
                <div>
                    <img src="img/logo.png" alt="logo">
                </div>
            <p class="text-danger fs-2">Chi guarda?</p>
            </div>
            <div class="d-flex justify-content-around">
                <div class="main-box text-white text-center mx-4">
                    <div class="box" @click="nextPages(store.propics[0], 'Alex')">
                        <img :src="store.propics[0]">
                    </div>
                    <p class="fs-4">Alex</p>
                </div>
                <div class="main-box text-white text-center mx-4">
                    <div class="box" @click="nextPages(store.propics[1], 'Oder')">
                        <img :src="store.propics[1]">
                    </div>
                    <p class="fs-4">Oder</p>
                </div>
                <div class="main-box text-white text-center mx-4">
                    <div class="box" @click="nextPages(store.propics[2], 'Iaio')">
                        <img :src="store.propics[2]" alt="iaio">
                    </div>
                    <p class="fs-4">Iaio</p>
                </div>
            </div>
        </div>
        
    </div>
    <div v-else >
        <video @click="playSound('audio/Netflix-Audio.mp3')" autoplay muted>
            <source src="video/Netflix-Intro.mp4" type="video/mp4">
        </video>
        <audio autoplay>
            <source src="audio/Netflix-Audio.mp3" type="audio/mpeg">
        </audio>
    </div>
    
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'PreviewComponent',
        data(){
            return {
                store,
            }
        },
        methods: {
            togliIntro(){
                setTimeout(() => {
                    store.initialFlag = true;
                }, 4000)
            },
            nextPages(imgPath, name){
                store.videoFlag = true;
                this.togliIntro();
                store.mainPagePropics.push(imgPath, name);
            }
        },
    }
</script>

<style lang="scss" scoped>
.main-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.fa-plus {
    font-size: 100px;
}
.main-box:hover {
    scale: 1.2;
    transition: scale 0.5s linear;
    
}
.box:hover {
    cursor: pointer;
    box-shadow: 0 0 10px white;
    transition: box-shadow 0.5s linear;
}
img {
    width: 200px;
    height: 200px;
}
video {
    width: 100%;
    height: 100%;
}
</style>