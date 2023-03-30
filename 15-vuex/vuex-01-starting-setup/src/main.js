import {createApp} from 'vue';
import {createStore,} from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment');
            }, 1500)
        },
        increase(context, payload) {
            console.log(context);
            context.commit('increase', payload);
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
