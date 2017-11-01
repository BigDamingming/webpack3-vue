import ECharts from 'echarts';

export default {
    install({ prototype: pro }) {
        pro.$chart = ECharts;
    }
};