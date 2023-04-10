import {createStore} from "vuex";
import productsModule from "@/store/module/products.js";
import cartModule from "@/store/module/cart.js";

const store = createStore({
    modules: {
        prods: productsModule,
        carts: cartModule
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});

export default store;