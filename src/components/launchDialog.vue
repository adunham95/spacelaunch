<template>
    <v-dialog v-model="dialog" fullscreen lazy transition="dialog-bottom-transition" :overlay=true>
        <v-card>
            <v-toolbar dark class="primary">
                <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ launch.name }} </v-toolbar-title>
                <v-spacer></v-spacer>
                <!--<v-card>-->
                    <!--&lt;!&ndash;<v-card-media :src="launchData.rocket.imageURL" height="200px">&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-card-media>&ndash;&gt;-->
                    <!--<v-card-title primary-title>-->
                        <!--<div>-->
                            <!--<h3 class="headline mb-0">Kangaroo Valley Safari</h3>-->
                            <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
                        <!--</div>-->
                    <!--</v-card-title>-->
                    <!--<v-card-actions>-->
                        <!--<v-btn flat class="orange&#45;&#45;text">Share</v-btn>-->
                        <!--<v-btn flat class="orange&#45;&#45;text">Explore</v-btn>-->
                    <!--</v-card-actions>-->
                <!--</v-card>-->
            </v-toolbar>
        </v-card>
    </v-dialog>
</template>

<script>
    import api from '../api'
    export default {
        name: 'launchDialog',
        props: ['launch', 'dialogSet'],
//        mounted: {
//            launchData: function () {
//
//                api.getSingleLaunch(this, this.launch.id).then(response => {
//                    // success callback
//                    return response;
//                }, response => {
//                    // error callback
//                });
//            },
//        },
        data() {
            return {
                dialog: false,
                title: 'launchDialog',
            };
        },
    };
</script>

<style>

</style>
