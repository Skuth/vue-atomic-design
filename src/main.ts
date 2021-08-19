import { createApp } from "vue"
import store from "@/store"
import App from "./App.vue"
import "normalize.css"
import "@/assets/css/main.css"

createApp(App).use(store).mount("#app")
