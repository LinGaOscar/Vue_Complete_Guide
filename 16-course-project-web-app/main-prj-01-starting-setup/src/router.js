import {defineAsyncComponent} from "vue";
import {createRouter, createWebHistory} from "vue-router";

// import CoachDetail from "@/pages/coaches/CoachDetail";
import CoachesList from "@/pages/coaches/CoachesList";
// import CoachRegistration from "@/pages/coaches/CoachRegistration";
// import ContactCoach from "@/pages/request/ContactCoach";
// import RequestReceived from "@/pages/request/RequestReceived";
// import UserAuth from "@/pages/auth/UserAuth";
import NotFound from "@/pages/NotFound";
import store from "@/store";

const CoachDetail = () => import('@/pages/coaches/CoachDetail');
const CoachRegistration = defineAsyncComponent(() => import('@/pages/coaches/CoachRegistration'));
const ContactCoach = defineAsyncComponent(() => import('@/pages/request/ContactCoach'));
const RequestReceived = defineAsyncComponent(() => import('@/pages/request/RequestReceived'));
const UserAuth = defineAsyncComponent(() => import('@/pages/auth/UserAuth'));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {path: 'contact', component: ContactCoach} // /coaches/c1/contact
            ]
        },
        {path: '/register', component: CoachRegistration, meta: {requiresAuth: true}},
        {path: '/requests', component: RequestReceived, meta: {requiresAuth: true}},
        {path: '/auth', component: UserAuth, meta: {requiresUnauth: true}},
        {path: '/:notFound(.*)', component: NotFound},
    ],
});

router.beforeEach(function (to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
});

export default router;