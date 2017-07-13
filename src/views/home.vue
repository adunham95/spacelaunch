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
						<!--<next-card v-for="launch in launches" :key="launch.id" :launch="launch"></next-card>-->
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
			this.checkCache()
		},
        data() {
            return {
                title: 'home',
				launches: '',
				eventType: '',
				agencyType: '',
				missionType: ''
            };
        },
        methods: {
            checkCache: function () {
                let check = this.$localStorage.get('cacheBool');
				console.log(check);
				if ( check === true){
					console.log("Already retrieved cache");
				}
				else {
                    console.log('Retrieveing new data');
                    this.cachingNew();
				}
            },
            cachingNew: function () {
                api.getEventType(this).then(response => {
                    // success callback
                    this.$localStorage.set('eventTypes', response);
                }, response => {
                    // error callback
                });
                api.getAgencyTypes(this).then(response => {
                    // success callback
                    this.$localStorage.set('agencyTypes', response);
                }, response => {
                    // error callback
                });
                api.getMissionTypes(this).then(response => {
                    // success callback
                    this.$localStorage.set('missionTypes', response);
                }, response => {
                    // error callback
                });

                //Sets the cache to true to set the cached data
                this.$localStorage.set('cacheBool', true)

            }
		}
    };
</script>

<style>

</style>
