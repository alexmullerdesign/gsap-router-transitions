import { createApp } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import App from './App.vue';
import router from './router';

import './assets/main.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);

app.use(router);

app.mount('#app');
