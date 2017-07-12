import Vue from 'vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import 'vue-awesome/icons';
import VueLocalStorage from 'vue-localstorage';


// Pages
import Home from '@/views/home';
import Rockets from '@/views/rockets';
import Agency from '@/views/agency';
import SingleRocket from '@/views/singleRocket';

Vue.use(Router);
Vue.use(Vuetify);
Vue.use(VueResource);
Vue.use(VueLocalStorage);

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
        {
            path: '/rockets/:id',
            name: 'Single Rockets',
            component: SingleRocket,
            icon: 'rocket',
        },
        {
            path: '/agency',
            name: 'Agencies',
            component: Agency,
            icon: 'rocket',
        }
    ],
});
