import axios from 'axios';

/**
 * axios
 * timeout: 6e5
 */
export default {
    install({ prototype: pro }) {
        pro.$fetch = fac.bind(pro);
    }
};


/**
 * 工厂模式
 */
function fac(opt) {
    this.$Loading.start() || axios.create({ timeout: 6e5 })(opt).then(({ data }) => suc.call(this, data, opt.suc)).catch(({ message }) => err.call(this, message, opt.err));
}


/**
 * 成功回调
 */
function suc(res, cb = function () { }) {
    if (Object.prototype.toString.call(res).slice(8, -1).toLowerCase() !== 'object') return;
    if (Number.isInteger(res.code)) {
        if (res.code === 0) {
            this.$Loading.finish() || cb(res);
        }
        else {
            this.$Loading.finish() || this.$Notice.warning({ title: '状态异常', desc: 'Code no equal 0' });
        }
    }
    else {
        this.$Loading.error() || this.$Notice.error({ title: '状态异常', desc: 'Code Type Error' });
    }
}


/**
 * 失败回调
 */
function err(msg, cb = function () { }) {
    this.$Loading.error() || cb() || this.$Notice.error({ title: '接口异常', desc: msg });
}