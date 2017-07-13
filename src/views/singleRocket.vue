<template>
    <div id="singleRocket">
        <v-container>
            <v-card>
                <v-card-media
                        class="white--text"
                        height="200px"
                        :src="rocketSingle.imageURL"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">{{rocketSingle.name}}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <v-card-title>
                    <div>
                        <span class="grey--text">{{agency.name}}</span><br>
                        <span>{{rocketSingle.family.name}}</span><br>
                        <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat class="orange--text" :href="rocketSingle.infoURL">Link</v-btn>
                    <v-btn flat class="orange--text" :href="rocketSingle.wikiURL">Wiki</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import api from '../api'
    export default {
        name: 'singleRocket',
        watch: {
            '$route' (to, from) {

            },
        },
        created() {
            api.getSingleRocket(this, this.$route.params.id).then(response => {
                // success callback
                this.rocketSingle = response[0];
                console.log(this.rocketSingle);
                api.getSingleAgency(this, this.rocketSingle.family.agencies).then(response => {
                   this.agency = response[0];
                    console.log(this.agency)
                });
            }, response => {
                // error callback
            });
        },
        data() {
            return {
                title: 'singleRocket',
                rocketSingle: '',
                agency: ''
            };
        },
    };
</script>

<style>

</style>
