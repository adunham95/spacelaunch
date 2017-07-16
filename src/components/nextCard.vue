<template>
    <div>

            <v-card class="blue-grey darken-2 white--text nextCard">
                <v-card-title primary-title>
                    <div class="headline">
                        {{ launch.name }}
                        <!--<v-chip :class="[status.css]">{{ status.title }} </v-chip>-->
                        <status-chip :statusID="launch.status"></status-chip>
                    </div>
                </v-card-title>
                <router-link :to="{ name: 'Single Launch', params: { id: launch.id }}">
                    <v-btn block secondary dark>Read More</v-btn>
                </router-link>
            </v-card>


    </div>
</template>

<script>
    import StatusChip from "./statucChip";
    export default {
        components: {StatusChip},
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
        text-decoration:  none;
    }
</style>
