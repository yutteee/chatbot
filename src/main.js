import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCommentDots, faPaperPlane, faLink, faXmark, faFileLines, faFilePdf, faPlay, faStop, faFile)

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
