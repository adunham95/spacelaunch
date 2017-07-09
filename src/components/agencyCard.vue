<template>
    <div class="agencyCard">
        <v-card class="rocketCard">
            <v-card-title class="blue white--text">
                <span class="headline">{{ agency.name }}</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <!--<v-card-text>Text</v-card-text>-->
        </v-card>
    </div>
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

</style>
