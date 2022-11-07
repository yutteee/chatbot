import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCommentDots)

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
