import {createStore} from "vuex";

import rootMutations from "@/srore/mutations.js";
import rootActions from "@/srore/actions.js";
import rootGetters from "@/srore/getters.js";
import counterModule from "@/srore/module/counter/index.js"

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;