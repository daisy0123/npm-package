import { createApp } from 'vue';
import App from './App.vue';
import packages from '../packages/index';

const app = createApp(App);

app.use(packages);
app.mount('#app');
