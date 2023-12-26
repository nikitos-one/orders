import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '../Auth.js';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Home from '../views/Home';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        // meta: {
        //     requiresAuth: true
        // }
    },
    // {
    //     path: '/register',
    //     name: "Register",
    //     component: RegisterForm,
    //     meta: {
    //         reload: true,
    //         requiresAuth: true
    //     },
    // },
    // {
    //     path: '/login',
    //     name: "Login",
    //     component: LoginForm,
    //     meta: {
    //         reload: true,
    //     },
    // },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) ) {
        if (Auth.check()) {
            next();
            return;
        } else {
            router.push('/login')
        }
    } else {
        next();
    }
});



export default router
