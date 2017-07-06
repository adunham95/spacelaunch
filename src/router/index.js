import Vue from 'vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import 'vue-awesome/icons';

// Pages
import Home from '@/views/home';
import Rockets from '@/views/rockets';

Vue.use(Router);
Vue.use(Vuetify);
Vue.use(VueResource);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Mission Control',
            component: Home,
            icon: 'dashboard',
        },
        {
            path: '/rockets',
            name: 'Rockets',
            component: Rockets,
            icon: 'rocket',
        },
    ],
});
