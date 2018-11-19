const regExp = (p, t = 'mp') => {
    let s;
    switch (t) {
        case 'mp':
            s = /^1[3,4,5,6,7,8,9]{1}[0-9]{9}$/.test(p);
            // 验证手机号格式
            break;
        case 'em':
            s = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(p);
            // 验证email格式
            break;
        case 'qq':
            s = /^[1-9]{1}[0-9]{5,11}$/.test(p);
            // 验证qq号格式
            break;
        case 'wx':
            s = /^[a-zA-Z\d_]{5,}$/.test(p);
            // 验证微信号格式
            break;
        case 'pw':
            s = /^\w{8,16}$/.test(p);
            // 校验8-16位数字+英文密码+下划线
            break;
        default:
            s = true;
            break;
    }
    return s;
};

//utc时间格式转化
const formatUTC = (utc) => {
    if (utc) {
        let date = new Date(utc);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}-${month}-${day}`;
    }
}

//时间戳转化
const formatDate = (timestamp, fmt = 'yyyy-MM-dd hh:mm:ss') => {
    if (!timestamp) return '';
    //console.log('timestamp',timestamp);
    let date = null;
    if (timestamp instanceof Date) {
        date = timestamp;
    } else {
        date = new Date(timestamp);
    }

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

//判断是否是手机
const isMobile = () => {
    let sUserAgent = navigator.userAgent.toLowerCase();
    let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    let bIsMidp = sUserAgent.match(/midp/i) == "midp";
    let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    let bIsAndroid = sUserAgent.match(/android/i) == "android";
    let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}
export {
    regExp,
    formatUTC,
    formatDate,
    isMobile
}
