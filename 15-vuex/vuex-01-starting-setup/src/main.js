import {createApp} from 'vue';

import App from './App.vue';
import store from "@/srore/index";

const app = createApp(App);

app.use(store);

app.mount('#app');
