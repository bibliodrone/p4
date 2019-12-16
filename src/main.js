import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BlogPosts from './components/BlogPosts.vue';
import BlogCategories from './components/BlogCategories.vue';
import BlogPage from './components/BlogPage.vue';
import Favorites from './components/Favorites.vue';
import MailingList from './components/MailingList.vue';
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: BlogPosts, name: 'homepage' },
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
