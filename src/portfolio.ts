import {createApp} from 'vue'
import Portfolio from './Portfolio.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import axios from 'axios';

axios.get('/api/v1/portfolio')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });

const app = createApp(Portfolio);
app.component('About', About);
app.component('Skills', Skills);
app.component('Resume', Resume);
app.component('Contact', Contact);
app.component('Footer', Footer);

app.mount('#portfolio');
