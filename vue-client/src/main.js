
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/aura-light-green/theme.css'
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css'


import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Breadcrumb from 'primevue/breadcrumb';
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'



import Ripple from 'primevue/ripple';

// third party
import Vue3Autocounter from 'vue3-autocounter';
import Vue3Marquee from 'vue3-marquee';
import Avatar from 'primevue/avatar';
import Chip from 'primevue/chip'
import Divider from 'primevue/divider'

const pinia = createPinia()
const app = createApp(App)



app.component('vue3-autocounter', Vue3Autocounter)

app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('Carousel', Carousel)
app.component('Card', Card)
app.component('Image', Image)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
app.component('Avatar', Avatar)
app.component('Breadcrumb', Breadcrumb)
app.component('InputGroup', InputGroup)
app.component('InputText', InputText)
app.component('Chip', Chip)
app.component('Divider', Divider)

app.directive('ripple', Ripple);

app.use(pinia)
app.use(Vue3Marquee);
app.use(PrimeVue);
app.use(router)

app.mount('#app')
