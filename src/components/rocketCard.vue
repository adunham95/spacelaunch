<template>
    <div>
        <v-card class="rocketCard">
            <v-card-title class="blue white--text">
                <span class="headline">{{ rocket.name }}</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <!--<v-card-text>Text</v-card-text>-->
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'rocketCard',
        props: ['rocket'],
//        created() {
//            // GET /someUrl
//
//            this.$http.get(`https://launchlibrary.net/1.2/agency/` + this.rocket.family.agencies).then(response => {
//                // success callback
//                this.agency = response.body;
//                console.log(this.agency)
//            }, response => {
//                // error callback
//            });
//        },
        data() {
            return {
                title: 'rocketCard',
            };
        },
    };
</script>

<style>
    .rocketCard {
        margin: 10px 0;
    }
</style>
