// import './assets/main.css'
import CheckboxItem from './components/CheckboxItem.vue';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .component('CheckboxItem', CheckboxItem)
    .mount('#app')


    
// createApp(App).mount('#app')
