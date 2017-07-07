<template>
    <div id="rockets">
        <rocket-card v-for="rocket in rockets" :rocket="rocket" :id="rocket.id"></rocket-card>
    </div>
</template>

<script>
    import RocketCard from "../components/rocketCard";
    export default {
        components: {RocketCard},
        name: 'rockets',
        created() {
            // GET /someUrl
            this.$http.get('https://launchlibrary.net/1.1/rocket/').then(response => {
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
