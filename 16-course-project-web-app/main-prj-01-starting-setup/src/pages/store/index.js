import {createStore} from "vuex";
import coachesModule from "@/pages/store/modules/coaches/index";
import requestModule from "@/pages/store/modules/request/index"

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestModule
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;