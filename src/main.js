import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import "aos/dist/aos.css";
import Aos from "aos";

createApp(App).use(Aos).mount("#app");
