<template>
    <div id="singleRocket">
        <v-container>
            <v-card>
                <v-card-media
                        class="white--text"
                        height="200px"
                        :src="singleRocket.imageURL"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">{{singleRocket.name}} {{singleRocket.configureation}}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <v-card-title>
                    <div>
                        <span class="grey--text">Number 10</span><br>
                        <span>{{singleRocket.name}} {{singleRocket.configureation}}</span><br>
                        <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat class="orange--text">Share</v-btn>
                    <v-btn flat class="orange--text">Explore</v-btn>
                </v-card-actions>
            </v-card>
            User {{ $route.params.id }}
        </v-container>
    </div>
</template>

<script>
    import api from '../api'
    export default {
        name: 'singleRocket',
        watch: {
            '$route' (to, from) {
                api.getSingleRocket(this, this.$route.params.id).then(response => {
                    // success callback
                    this.singleRocket = response;
                }, response => {
                    // error callback
                });
            },
        },
        created() {
            api.getSingleRocket(this, this.$route.params.id).then(response => {
                // success callback
                this.singleRocket = response;
            }, response => {
                // error callback
            });
        },
        data() {
            return {
                title: 'singleRocket',
                singleRocket: ''
            };
        },
    };
</script>

<style>

</style>
