<template>
    <v-card class="agencyCard">
        <v-card-title class="blue white--text">
            <span class="headline">{{ agency.name }}</span>
            <v-spacer></v-spacer>
        </v-card-title>
        <!--<v-card-text>Text</v-card-text>-->
    </v-card>
</template>

<script>
    export default {
        name: 'agencyCard',
        props: ['agency'],
        data() {
            return {
                title: 'agencyCard',
            };
        },
    };
</script>

<style>
    .agencyCard {
        margin: 10px 0;
    }
</style>
