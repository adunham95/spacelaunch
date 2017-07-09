<template>
    <div id="template">

    </div>
</template>

<script>
    export default {
        name: 'LaunchLibrary',
        created() {
            // GET /someUrl
            this.$http.get('https://launchlibrary.net/1.1/launch/next/5').then(response => {
                // success callback
                this.launches = response.body.launches;
                console.log(this.launches);
            }, response => {
                // error callback
            });
            // GET /someUrl
            this.$http.get('https://launchlibrary.net/1.1/rocket/').then(response => {
                // success callback
                this.rockets = response.body.rockets;
                console.log(this.rockets)
            }, response => {
                // error callback
            });
        }
    };
</script>

<style>

</style>
