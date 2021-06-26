import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue';
import CalendarComponent from '@/views/Calendar.vue';
import ProfileComponent from '@/views/Profile.vue';
import ShareComponent from '@/views/Share.vue';
import SignInComponent from '@/views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/calendart/:type',
    name: 'Calendar',
    component: CalendarComponent,
    props: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileComponent,
  },
  {
    path: '/share',
    name: 'Share',
    component: ShareComponent,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
