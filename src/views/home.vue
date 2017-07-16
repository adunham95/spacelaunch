<template>
    <div id="home">
		<main>
			<v-container
				fluid
				style="min-height: 0;"
				grid-list-lg
			>
				<v-layout row wrap >
					<v-flex xs12>
						<next-card v-for="launch in launches" :key="launch.id" :launch="launch"></next-card>
					</v-flex>
				</v-layout>
			</v-container>
		</main>
    </div>
</template>

<script>
    import NextCard from "../components/nextCard";
    import api from '../api'
    export default {
        components: {NextCard},
        name: 'home',
		created() {
			api.getNext(this, 5).then(response => {
                // success callback
                this.launches = response;
            }, response => {
                // error callback
            });
		},
		mounted() {
            api.checkCache(this)
		},
        data() {
            return {
                title: 'home',
				launches: '',
            };
        },

    };
</script>

<style>

</style>
