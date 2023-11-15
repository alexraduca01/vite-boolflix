<template>
    <div class="col-2 my-4">
        <div>
            <img :src="thumb" class="w-100 card-img" :alt="title">
        </div>
        <div class="text-white">
            <h3>{{ title }}</h3>
            <h4>{{ originalTitle }}</h4>
            <p v-if="!flag">{{ lingua }}</p>
            <img v-else :src="myFlag" alt="">
            <p v-if="!starFlag">{{ vote }}</p>
            <div>
                <i v-for="n in vote" class="fa-solid fa-star" style="color: #d4e123;"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'CardComponent',
        props: {
            thumb: String,
            title: String,
            originalTitle: String,
            lingua: String,
            vote: Number,
        },
        data(){
            return {
                myFlag: '',
                flag: false,
                myStar: '<i class="fa-solid fa-star" style="color: #d4e123;"></i>',
                starFlag: false,
            }
        },
        methods: {
            postStars(){
                if(this.vote > 0){
                    this.starFlag = true;
                } 
            },
            changeFlag(){
                if(this.lingua === 'en'){
                    this.flag = true;
                    this.myFlag = store.flags.eng;
                } else if (this.lingua === 'it'){
                    this.flag = true;
                    this.myFlag = store.flags.ita;
                } else if (this.lingua === 'fr'){
                    this.flag = true;
                    this.myFlag = store.flags.fra;
                } else if (this.lingua === 'es'){
                    this.flag = true;
                    this.myFlag = store.flags.esp;
                }
            }
        },
        created(){
            this.changeFlag();
            this.postStars();
        }
    }
</script>

<style lang="scss" scoped>
.card-img {
    height: 770.69px;
}
</style>