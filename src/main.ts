import { createApp } from 'vue'
import App from './App.vue'
import LuButton from '@/components/button.vue'
import LuDialog from '@/components/dialog.vue'
import LuInput from '@/components/input.vue'
import LuSwitch from '@/components/switch.vue'
import LuRadio from '@/components/radio.vue'
import LuRadioGroup from '@/components/radio-group.vue'
import '@/assets/fonts/iconfont.css'
const app = createApp(App);

app.component('lu-button', LuButton);
app.component('lu-dialog', LuDialog);
app.component('lu-input', LuInput);
app.component('lu-switch', LuSwitch);
app.component('lu-radio', LuRadio);
app.component('lu-radio-group', LuRadioGroup);

app.mount('#app');
