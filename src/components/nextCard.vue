<template>
    <div>
        <v-card class="blue-grey darken-2 white--text nextCard">
            <v-card-title primary-title>
                <div class="headline">
                    {{ launch.name }}
                    <v-chip :class="[status.css]">{{ status.title }} </v-chip>
                </div>
            </v-card-title>
            <v-btn block secondary dark @click.native.stop="dialog = true">Read More</v-btn>
        </v-card>

        <v-dialog v-model="dialog" fullscreen lazy transition="dialog-bottom-transition" :overlay=true>
            <v-card>
                <v-toolbar dark class="primary">
                    <v-btn icon @click.native="dialog = false" dark>
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{ launch.name }} </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-card>
                    <!--<v-card-media :src="launchData.rocket.imageURL" height="200px">-->
                    <!--</v-card-media>-->
                    <v-card-title primary-title>
                    <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn flat class="orange--text">Share</v-btn>
                    <v-btn flat class="orange--text">Explore</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-toolbar>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
    export default {
        name: 'nextCard',
        props: ['launch'],
        mounted() {
          if(this.launch.status === 1) {
//              console.log("Green");
              this.status.id = 1;
              this.status.title = 'Green';
              this.status.css = 'green white--text'
          }
          else if(this.launch.status === 2) {
//              console.log("Red");
              this.status.id = 2;
              this.status.title = 'Red';
              this.status.css = 'red white--text'
          }
          else  {
              console.log("Null")
          }
        },
        data() {
            return {
                title: 'nextCard',
                dialog: false,
                status: {id: '', title: '', css: ''},
            };
        },
    };
</script>

<style>
    .nextCard {
        margin: 10px 0;
    }
</style>
