//get, getBlob, post, postForm, postJson
import {getBlob} from './ajax';

export default {

  // 获取验证码
  loginValicode: args => getBlob('/validCode', args),

};
