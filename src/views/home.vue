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
    export default {
        components: {NextCard},
        name: 'home',
		created() {
			// GET /someUrl
			this.$http.get('https://launchlibrary.net/1.2/launch?next=5&mode=summary').then(response => {
				// success callback
				this.launches = response.body.launches;
				console.log(this.launches)
			}, response => {
				// error callback
			});
		},
        data() {
            return {
                title: 'home',
				launches: ''
            };
        }
    };
</script>

<style>

</style>
