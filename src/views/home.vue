<template>
    <div id="home">
		<main>
			<v-container
				fluid
				style="min-height: 0;"
				grid-list-lg
			>
				<v-layout row wrap v-for="launch in launches" :key="launch.name">
					<v-flex xs12>
						<v-card class="blue-grey darken-2 white--text">
							<v-card-title primary-title>
								<div class="headline"> {{ launch.rocket.name }}</div>
								<div>{{ launch.missions[0].description }}</div>
							</v-card-title>
							<v-card-actions>
								<v-btn flat dark :href="launch.vidURLs[0]">Watch</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</main>
    </div>
</template>

<script>
    export default {
        name: 'home',
		created() {
			// GET /someUrl
			this.$http.get('https://launchlibrary.net/1.1/launch/next/5').then(response => {
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
