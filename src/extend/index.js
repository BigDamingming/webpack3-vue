import 'iview/dist/styles/iview.css';
import iView from 'iview';
import Axios from './axios';
import Chart from './chart';
import Moment from './moment';

export default {
    install(Vue) {
        Vue.use(iView);
        Vue.use(Axios);
        Vue.use(Chart);
        Vue.use(Moment);
    }
};