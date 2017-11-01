import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export default fac.bind(new VueRouter({
    routes,
}))();


/**
 * 工厂模式
 */
function fac() {
    return this.beforeEach(fun) && this;
}


/**
 * 路由回调
 */
function fun(to, from, next) {
    // 已认证
    if (localStorage['auth']) {
        if (to.path.match('login')) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        }
        else {
            next();
        }
    }
    // 未认证
    else {
        if (to.path.match('login')) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    }
}