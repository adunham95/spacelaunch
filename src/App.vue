<template>
  <div id="app">
    <v-app id="example-2">
      <v-navigation-drawer persistent light v-model="drawer" overflow>
        <v-list class="pa-0">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Space Launch</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="route in routing" :key="route.name">
            <v-list-tile-action>
              <v-icon fa>{{ route.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link :to="route.path">{{ route.name }}</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed class="indigo darken-4" dark>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Space</v-toolbar-title>
      </v-toolbar>
      <main>
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            drawer: true,
            mini: false,
            right: null,
            routing: [
                {
                    path: '/',
                    name: 'Mission Control',
                    icon: 'dashboard',
                },
                {
                    path: '/rockets',
                    name: 'Rockets',
                    icon: 'rocket',
                },
                {
                    path: '/agency',
                    name: 'Agencies',
                    icon: 'rocket',
                }
            ],
        };
    }
};
</script>


<style>
  .toolbar--absolute+main, .toolbar--fixed+main {
    padding-top: 43px !important;
  }
</style>
