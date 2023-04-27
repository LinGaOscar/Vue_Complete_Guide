import mutations from "@/pages/store/modules/request/mutations";
import actions from "@/pages/store/modules/request/actions";
import getters from "@/pages/store/modules/request/getters";

export default {
    namespaced: true,
    state() {
        return {
            requests: []
        };
    },
    mutations,
    actions,
    getters
}