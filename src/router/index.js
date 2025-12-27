import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import NotFound from '../views/errors/404.vue'
import { isValidHash } from '../helpers/hashValidator'

const routes = [
    { path: '/', name: 'Home', component: Main },
    { path: '/services', redirect: '/#servicos' },
    { path: '/clients', redirect: '/#clientes' },
    { path: '/contact', redirect: '/#contato' },
    { path: '/about-us', redirect: '/#sobre-nos' },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            if (isValidHash(to.hash)) {
                return { el: to.hash, behavior: 'smooth' };
            } else {
                return { left: 0, top: 0 }; // scroll to top if invalid
            }
        }
    },
});

// Global guard for invalid hashes
router.beforeEach((to, from, next) => {
    if (to.hash && !isValidHash(to.hash)) {
        next({ name: 'NotFound' });
    } else {
        next();
    }
});

export default router;