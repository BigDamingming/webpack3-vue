import axios from 'axios';

/**
 * axios
 * timeout: 6e5
 */
export default {
    install({ prototype: pro }) {
        pro.$fetch = fac.bind(null, pro);
    }
};


// 工厂模式
function fac(pro, opt) {
    pro.$Loading.start() || axios.create({ timeout: 6e5 })(opt).then(({ data }) => suc(pro, data, opt.suc)).catch(({ message }) => err(pro, message, opt.err));
}


// 成功回调
function suc(pro, res, cb = function () { }) {
    if (Object.prototype.toString.call(res).slice(8, -1).toLowerCase() !== 'object') return;
    if (Number.isInteger(res.code)) {
        if (res.code === 0) {
            pro.$Loading.finish() || cb(res);
        }
        else {
            pro.$Loading.finish() || pro.$Notice.warning({ title: '状态异常', desc: 'Code 不等于 0' });
        }
    }
    else {
        pro.$Loading.error() || pro.$Notice.error({ title: '状态异常', desc: 'Code 数据类型错误' });
    }
}


// 失败回调
function err(pro, msg, cb = function () { }) {
    pro.$Loading.error() || cb() || pro.$Notice.error({ title: '接口异常', desc: msg });
}