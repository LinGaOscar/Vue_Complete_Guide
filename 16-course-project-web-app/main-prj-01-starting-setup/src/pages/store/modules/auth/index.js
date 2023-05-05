import mutations from "@/pages/store/modules/auth/mutations";
import actions from "@/pages/store/modules/auth/actions";
import getters from "@/pages/store/modules/auth/getters";

export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        };
    },
    mutations,
    actions,
    getters
};