/*
* 存储加解密，统一处理
* */
const CryptoJS = require('crypto-js');  //引用AES源码js
const key = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_CRYPTOJS_KEY);  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_CRYPTOJS_IV);   //十六位十六进制数作为密钥偏移量
//解密方法
function Decrypt(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
//加密方法
function Encrypt(word) {

    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}

export const set_SStorage=(key,data)=>{
    sessionStorage.setItem(key,Encrypt(JSON.stringify(data)));
}
export const get_SStorage=(key)=>{
    return JSON.parse(Decrypt(sessionStorage.getItem(key)));
}
