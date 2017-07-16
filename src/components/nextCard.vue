<template>
    <div>

            <v-card class="blue-grey darken-2 white--text nextCard">
                <v-card-title primary-title>
                    <div class="headline">
                        {{ launch.name }}
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
    import StatusChip from "./statusChip";
    export default {
        components: {StatusChip},
        name: 'nextCard',
        props: ['launch'],
        data() {
            return {
                title: 'nextCard',
                dialog: false,
            };
        },
    };
</script>

<style>
    .nextCard {
        text-decoration:  none;
    }
</style>
