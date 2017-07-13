<template>
    <div class="rocketCard">
        <!--<v-btn block secondary large v-bind:to="{ name: 'Single Rockets', params: { id: rocket.id }}">{{ rocket.name }}</v-btn>-->
        <!--<v-card class="rocketCard">-->
            <!--<v-card-title class="blue white&#45;&#45;text">-->
                <!--<span class="headline">-->
                    <!--<router-link :to="{ name: 'Single Rockets', params: { id: rocket.id }}">{{ rocket.name }}</router-link>-->
                <!--</span>-->
            <!--</v-card-title>-->
            <!--&lt;!&ndash;<v-card-text>Text</v-card-text>&ndash;&gt;-->
        <!--</v-card>-->

        <router-link :to="{ name: 'Single Rockets', params: { id: rocket.id }}">
            <v-list-tile v-bind:key="rocket.id">
                <v-list-tile-content>
                    <v-list-tile-title class='noUnderScore' v-html="rocket.name"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </router-link>
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

<style scoped>

    .rocketCard, .noUnderScore, a {
        text-decoration:  none;
    }
</style>
