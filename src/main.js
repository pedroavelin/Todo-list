/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import moment from 'moment';
const app = createApp(App)

registerPlugins(app)

// Defina o Moment.js como uma propriedade global para acessá-lo em toda a aplicação
app.config.globalProperties.$moment = moment;
app.mount('#app')
