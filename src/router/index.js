import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import RegistrPage from '@/pages/RegistrPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: LoginPage, path: '/' },
  { name: 'registr', component: RegistrPage, path: '/registr' },
  { name: 'profile', component: ProfilePage, path: '/profile/:id' },
];

const router = new VueRouter({
  routes,
});

export default router;
