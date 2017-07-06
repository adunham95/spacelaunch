<template>
    <div id="home">

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
