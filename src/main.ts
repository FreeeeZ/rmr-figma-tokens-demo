import { createApp } from "vue";

import App from '@/App.vue';
import router from "@/router";

import 'normalize.css';
import '@/assets/scss/ui/index.scss';
import '@/assets/scss/global/index.scss';

export const app = createApp(App);

app.use(router).mount('#app');
