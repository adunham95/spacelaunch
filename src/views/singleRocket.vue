<template>
    <div id="singleRocket">
        <router-link to="/user/foo">/user/foo</router-link>
        User {{ $route.params.id }}
    </div>
</template>

<script>
    export default {
        name: 'singleRocket',
        watch: {
            '$route' (to, from) {
                // react to route changes...
            }
        },
        data() {
            return {
                title: 'singleRocket',
            };
        },
    };
</script>

<style>

    #singleRocket {
        padding-top: 60px;
    }

</style>
