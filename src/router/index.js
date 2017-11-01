import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export default fac.bind(new VueRouter({
    routes,
}))();


// 工厂模式
function fac() {
    return this.beforeEach(fun) && this;
}

// 路由回调
function fun(to, from, next) {
    if (localStorage['auth'] || to.path.match('login')) {
        return next();
    }


    next({
        path: '/login',
        query: {
            redirect: to.fullPath
        }
    });
}