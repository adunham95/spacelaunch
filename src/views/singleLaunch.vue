<template>
    <div class="singleLaunch">

        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card class="blue-grey darken-2 white--text">
                        <v-card-title primary-title>
                            <div class="headline">{{ launchSingle.name }}</div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat dark>Listen now</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card class="blue darken-2 white--text">
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <v-flex xs7>
                                    <div>
                                        <div class="headline">{{ launchSingle.rocket.familyname }} {{ launchSingle.rocket.configuration }}</div>
                                        <div>Foster the People</div>
                                    </div>
                                </v-flex>
                                <v-flex xs5>
                                    <v-card-media
                                            :src="launchSingle.rocket.imageURL"
                                            height="125px"
                                            contain
                                    ></v-card-media>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card class="green darken-3 white--text" v-for="missions in launchSingle.missions" :key="missions.id">
                        <v-container fluid grid-list-lg>
                            <div>
                                <div class="headline">{{ missions.name }}</div>
                                <div>{{ missions.description }}</div>
                            </div>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    import api from '../api'
    export default {
        name: 'singleLaunch',
        watch: {
            '$route' (to, from) {

            },
        },
        created() {
            api.getSingleLaunch(this, this.$route.params.id).then(response => {
                // success callback
                this.launchSingle = response[0];
                console.log(this.launchSingle);
            }, response => {
                // error callback
            });
        },
        data() {
            return {
                title: 'singleLaunch',
                launchSingle:'',
            };
        },
        methods: {

        }
    };
</script>

<style>

</style>
