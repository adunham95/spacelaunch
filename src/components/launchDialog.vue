<template>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=true>
        <v-card>
            <v-toolbar dark class="primary">
                <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ launchData.name }} </v-toolbar-title>
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
    export default {
        name: 'launchDialog',
        props: ['launch', 'dialogSet'],
        computed: {
            launchData: function () {
                this.$http.get('https://launchlibrary.net/1.2/launch?id=' + this.launch.id + '&mode=verbose').then(response => {
                    // success callback
                    console.log(response.body.launches);
                    console.log(response.body.launches.name);
                    return response.body.launches;
                }, response => {
                    // error callback
                });
            },
        },
        data() {
            return {
                dialog: false,
                title: 'launchDialog'
            };
        },
    };
</script>

<style>

</style>
