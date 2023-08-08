import { createApp } from 'vue'
import App from './App.vue'
import LuButton from '@/components/button.vue'
import LuDialog from '@/components/dialog.vue'
import LuInput from '@/components/input.vue'
import LuSwitch from '@/components/switch.vue'
import LuRadio from '@/components/radio.vue'
import LuRadioGroup from '@/components/radio-group.vue'
import LuCheckbox from '@/components/checkbox.vue'
import LuCheckboxGroup from '@/components/checkbox-group.vue'
import '@/assets/fonts/iconfont.css'
const app = createApp(App);

app.component(LuButton.name, LuButton);
app.component(LuDialog.name, LuDialog);
app.component(LuInput.name, LuInput);
app.component(LuSwitch.name, LuSwitch);
app.component(LuRadio.name, LuRadio);
app.component(LuRadioGroup.name, LuRadioGroup);
app.component(LuCheckbox.name, LuCheckbox);
app.component(LuCheckboxGroup.name, LuCheckboxGroup);

app.mount('#app');
