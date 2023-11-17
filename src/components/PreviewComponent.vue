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
                <div class="text-white text-center mx-4">
                    <div class="box" @click="nextPages()">
                        <img src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.webp">
                    </div>
                    <p class="fs-4">Alex</p>
                </div>
                <div class="text-white text-center mx-4">
                    <div class="box" @click="nextPages()">
                        <img src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp">
                    </div>
                    <p class="fs-4">Oder</p>
                </div>
                <div class="text-white text-center mx-4">
                    <div class="box" @click="nextPages()">
                        <img src="img/iaio.png" alt="iaio">
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
            playSound (sound) {
                if(sound) {
                    let audio = new Audio(sound);
                    audio.play();
                }
            },
            togliIntro(){
                setTimeout(() => {
                    store.initialFlag = true;
                }, 4000)
            },
            nextPages(){
                store.videoFlag = true;
                this.togliIntro();
            }
        },
        created(){
            // this.togliIntro();
        }
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
.box {
    cursor: pointer;
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