import { createApp } from "vue";
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from "@/router";

import 'normalize.css';
import '@/assets/scss/ui/index.scss';
import '@/assets/scss/global/index.scss';

const pinia = createPinia();
export const app = createApp(App);

app.use(router).use(pinia).mount('#app');
