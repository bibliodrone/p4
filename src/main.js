import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BlogHome from './components/BlogHome.vue';
import BlogCategories from './components/pages/BlogCategories.vue';
import BlogPage from './components/pages/BlogPage.vue'
import Favorites from './components/pages/Favorites.vue';
import MailingList from './components/pages/MailingList.vue';
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: BlogHome, name: 'homepage' },
  { path: '/categories', component: BlogCategories, name: 'categories' },
  // { path: '/by_category/:category', component: ByCategory, name: 'by_category' },
  { path: '/posts/:id', component: BlogPage, name: 'posts', props: true },
  { path: '/favorites', component: Favorites, name: 'favorites'},
  { path: '/mailing-list', component: MailingList, name: 'mailinglist'}
]


const router = new VueRouter({
  routes:routes,
  mode: 'history'
})

new Vue({
  store: store, 
  router: router,
  render: h => h(App),
}).$mount('#app')
