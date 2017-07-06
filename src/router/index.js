import Vue from 'vue';
import VueMaterial from 'vue-material'
import VueResource from 'vue-resource';
import Router from 'vue-router';
import 'vue-awesome/icons';

// Pages
import Home from '@/views/home';
import Rockets from '@/views/rockets';

Vue.use(Router);
Vue.use(VueMaterial);
Vue.use(VueResource);

Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'red',
    background: 'grey'
});

Vue.material.setCurrentTheme('default');

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
