import {createApp} from 'vue'
import Masthead from './components/Masthead.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Resume from './components/Resume.vue'
import ResumeDetail from './components/ResumeDetail.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import App from './App.vue'
import axios from 'axios';
import router from "./router";
import BootstrapVue from "bootstrap-vue";

const response = await axios.get('/api/v1/portfolio');
const result = response.data
console.log(result);

const app = createApp(App);
app.component('Masthead', Masthead);
app.component('About', About);
app.component('Skills', Skills);
app.component('Resume', Resume);
app.component('ResumeDetail', ResumeDetail);
app.component('Contact', Contact);
app.component('Footer', Footer);

app.use(router, BootstrapVue).mount('#app');


export function getLinks() {
    return result["links"];
}

export function getInroductions() {
    return result["introductions"];
}

export function getSkills() {
    return result["skills"];
}

export function getProjects() {
    return result["projects"];
}

export function getContacts() {
    return result["contacts"];
}