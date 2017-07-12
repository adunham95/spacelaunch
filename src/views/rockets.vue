<template>
    <div id="rockets">
        <v-container>
            <rocket-card v-for="rocket in rockets" :rocket="rocket" :id="rocket.id" :key="rocket.id"></rocket-card>
        </v-container>
    </div>
</template>

<script>
    import RocketCard from "../components/rocketCard";
    import api from '../api'
    export default {
        components: {RocketCard},
        name: 'rockets',
        created() {

            api.getRocket(this, 5, 'rockets').then(response => {
                // success callback
                this.rockets = response;
            }, response => {
                // error callback
            });
        },
        data() {
            return {
                title: 'rockets',
                rockets: ''
            };
        },
    };
</script>

<style>

</style>
