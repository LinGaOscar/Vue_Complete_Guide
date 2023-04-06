import counterMutations from "@/srore/module/counter/mutations";
import counterActions from "@/srore/module/counter/actions";
import counterGetters from "@/srore/module/counter/getters";

export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
}

