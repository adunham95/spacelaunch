<template>
    <div id="rocketCard">
        <v-card>
            <v-card-title class="blue white--text">
                <span class="headline">{{ rocket.name }}</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>Lorem Ipsum</v-card-text>
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

</style>
