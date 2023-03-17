import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/nav/NotFound";
import TeamsFooter from "@/components/teams/TeamsFooter";
import UserFooter from "@/components/users/UserFooter";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {
            name: 'teams',
            path: '/teams',
            meta: {
                needsAuth: true,
            },
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },//our-domain.com/teams => TeamsList
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UserFooter
            },
            beforeEnter(to, from, next) {
                console.log('User before enter');
                console.log(to, from);
                next();
            }
        },
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savePosition) {
        // scrollBehavior() {
        // console.log(to, from, savePosition);
        if (savePosition) {
            return savePosition;
        } else {
            return {left: 0, top: 0};

        }
    }
});
router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach')
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Needs Auth');
        next();
    } else {
        next();
    }
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({name: 'team-members', params: {teamId: 't2'}});
    // }

});
router.afterEach(function (to, from) {
    // sending analytics data
    console.log('Global afterEach')
    console.log(to, from)
});

const app = createApp(App)

app.use(router);
app.mount('#app');
