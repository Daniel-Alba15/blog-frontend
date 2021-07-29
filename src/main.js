import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { func } from './plugins/escape'


const app = createApp(App)
app.config.globalProperties.$func = func;
app.use(router)
app.use(store)
app.mount('#app');
