<template>
    <div class="col-2 my-4">
        <div>
            <img :src="thumb" class="w-100" :alt="title">
        </div>
        <div class="text-white">
            <h3>{{ title }}</h3>
            <h4>{{ originalTitle }}</h4>
            <p>{{ lingua }}</p>
            <p>{{ vote }}</p>
        </div>
    </div>
</template>

<script>
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

            }
        }
    }
</script>

<style lang="scss" scoped>
img {
    height: 770.69px;
}
</style>