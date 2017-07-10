<template>
    <div id="rockets">
        <v-container>
            <rocket-card v-for="rocket in rockets" :rocket="rocket" :id="rocket.id"></rocket-card>
        </v-container>
    </div>
</template>

<script>
    import RocketCard from "../components/rocketCard";
    export default {
        components: {RocketCard},
        name: 'rockets',
        created() {
            // GET /someUrl
//            this.$http.get('https://launchlibrary.net/1.2/rocket?limit=200').then(response => {
            this.$http.get('https://launchlibrary.net/1.2/rocket?limit=5&mode=summary').then(response => {
                // success callback
                this.rockets = response.body.rockets;
                console.log(this.rockets)
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
