<template>
    <div class="col-4">
        <div>
            <img :src="thumb" :alt="title">
        </div>
        <div>
            <h3>{{ title }}</h3>
            <h4>{{ originalTitle }}</h4>
            <p>{{ lingua }}</p>
            <p>{{ voto }}</p>
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
            voto: String,
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>