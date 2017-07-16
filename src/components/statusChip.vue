<template>
    <div class="statusChip">
        <v-chip :class="[status.css]">{{ status.title }}</v-chip>
    </div>
</template>

<script>
    export default {
        name: 'statusChip',
        props:['statusID'],
        mounted() {
            console.log(this.statusID);
            if(this.statusID === 1) {
//              console.log("Green");
                this.status.id = 1;
                this.status.title = 'Green';
                this.status.css = 'green white--text'
            }
            else if(this.statusID === 2) {
//              console.log("Red");
                this.status.id = 2;
                this.status.title = 'Red';
                this.status.css = 'red white--text'
            }
            else  {
                console.log("Null")
            }
        },
        data() {
            return {
                title: 'statusChip',
                status: {id: '', title: '', css: ''},
            };
        },
    };
</script>

<style>

</style>
