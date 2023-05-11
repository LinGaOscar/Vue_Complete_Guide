import {createStore} from "vuex";
import coachesModule from "@/store/modules/coaches";
import requestModule from "@/store/modules/request";
import authModule from "@/store/modules/auth";

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestModule,
        auth: authModule
    },
});

export default store;