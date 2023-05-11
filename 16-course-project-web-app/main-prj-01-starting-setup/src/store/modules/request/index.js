import mutations from "@/store/modules/request/mutations";
import actions from "@/store/modules/request/actions";
import getters from "@/store/modules/request/getters";

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