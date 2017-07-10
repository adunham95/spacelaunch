<template>
    <v-card class="blue-grey darken-2 white--text nextCard">
        <v-card-title primary-title>
            <div class="headline">
                {{ launch.name }}
                <v-chip :class="[status.css]">{{ status.title }} </v-chip>
            </div>
        </v-card-title>
    </v-card>
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
