import { createApp } from "vue";
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from "@/router";

import 'normalize.css';
import '@/assets/scss/_ui/index.scss';
import '@/assets/scss/_global/index.scss';

const pinia = createPinia();
export const app = createApp(App);

app.use(router).use(pinia).mount('#app');
