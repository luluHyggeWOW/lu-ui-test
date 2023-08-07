import { createApp } from 'vue'
import App from './App.vue'
import LuButton from '@/components/button.vue'
import LuDialog from '@/components/dialog.vue'
import LuInput from '@/components/input.vue'
import '@/assets/fonts/iconfont.css'
const app = createApp(App);

app.component('lu-button', LuButton);
app.component('lu-dialog', LuDialog);
app.component('lu-input', LuInput);

app.mount('#app');
