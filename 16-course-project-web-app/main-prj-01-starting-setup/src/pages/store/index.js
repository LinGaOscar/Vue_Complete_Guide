import {createStore} from "vuex";
import coachesModule from "@/pages/store/modules/coaches/index";
import requestModule from "@/pages/store/modules/request/index";
import authModule from "@/pages/store/modules/auth/index";

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestModule,
        auth: authModule
    },
});

export default store;