import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/nav/NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        // {path: '/teams', component: TeamsList,alias:'/'},//our-domain.com/teams => TeamsList
        {path: '/teams', component: TeamsList},//our-domain.com/teams => TeamsList
        {path: '/users', component: UsersList},
        {path: '/teams/:teamId', component: TeamMembers, props: true},
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active-link'
});

const app = createApp(App)

app.use(router);
app.mount('#app');