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

let result;

const init = async () => {
    console.log("DATA!")
    await axios.get('/api/v1/portfolio', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
        }
    }).then((response) => {
            console.log(response)
            result = response.data;
        }
    ).catch((error) => {
        console.log("에러!");
        console.log(error);
    });
}
await init();

const main = () => {
    const app = createApp(App);
    app.component('Masthead', Masthead);
    app.component('About', About);
    app.component('Skills', Skills);
    app.component('Resume', Resume);
    app.component('ResumeDetail', ResumeDetail);
    app.component('Contact', Contact);
    app.component('Footer', Footer);

    app.config.globalProperties.$axios = axios;

    app.use(router).mount('#app');
}
main();

export function getPortfolio() {
    return result;
}