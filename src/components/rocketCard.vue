<template>
    <div>
        <v-card class="rocketCard">
            <v-card-title class="blue white--text">
                <span class="headline">{{ rocket.name }}</span>
                <router-link :to="{ name: 'Single Rockets', params: { id: rocket.id }}">/rocket/ {{rocket.id }} </router-link>
            </v-card-title>
            <!--<v-card-text>Text</v-card-text>-->
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'rocketCard',
        props: ['rocket'],
        data() {
            return {
                title: 'rocketCard',
            };
        },
    };
</script>

<style>
    .rocketCard {
        margin: 10px 0;
    }
</style>
