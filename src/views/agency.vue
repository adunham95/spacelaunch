<template>
    <div id="agency">
        <v-container>
            <agency-card  v-for="agency in agencies" :agency="agency" :key="agency.id" :id="agency.id"></agency-card>
        </v-container>
    </div>
</template>

<script>
    import AgencyCard from "../components/agencyCard";
    import api from '../api'
    export default {
        components: {AgencyCard},
        name: 'agency',
        created() {

            api.getAgency(this, 5, 'rockets').then(response => {
                // success callback
                this.agencies = response;
            }, response => {
                // error callback
            });


//            // GET /someUrl
////            this.$http.get('https://launchlibrary.net/1.2/agency?limit=200&mode=list').then(response => {
//            this.$http.get('https://launchlibrary.net/1.2/agency?limit=10&mode=list').then(response => {
//                // success callback
//                this.agencies = response.body.agencies;
//                console.log(this.agencies)
//            }, response => {
//                // error callback
//            });
        },
        data() {
            return {
                title: 'agency',
                agencies: ''
            };
        },
    };
</script>

<style>

</style>
