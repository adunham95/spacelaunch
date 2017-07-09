<template>
    <div id="rockets">
        <v-container>
            <rocket-card v-for="rocket in rockets" :rocket="rocket" :id="rocket.id"></rocket-card>
        </v-container>
        <!--<v-toolbar class="white" floating dense fixed>-->
            <!--<v-text-field prepend-icon="search" hide-details single-line></v-text-field>-->
            <!--<v-btn icon>-->
                <!--<v-icon>my_location</v-icon>-->
            <!--</v-btn>-->
            <!--<v-btn icon>-->
                <!--<v-icon>more_vert</v-icon>-->
            <!--</v-btn>-->
        <!--</v-toolbar>-->
    </div>
</template>

<script>
    import RocketCard from "../components/rocketCard";
    export default {
        components: {RocketCard},
        name: 'rockets',
        created() {
            // GET /someUrl
            this.$http.get('https://launchlibrary.net/1.1/rocket?limit=200').then(response => {
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
