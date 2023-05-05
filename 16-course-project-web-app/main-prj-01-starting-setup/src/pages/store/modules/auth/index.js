import mutations from "@/pages/store/modules/auth/mutations";
import actions from "@/pages/store/modules/auth/actions";
import getters from "@/pages/store/modules/auth/getters";

export default {
    state() {
        return {
            userId: 'c3'
        };
    },
    mutations,
    actions,
    getters
};