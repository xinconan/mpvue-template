// 请求接口
import { name, path } from './config';

const header = {};
/**
 * request 通用方法
 * @param {*} url 请求的url，不带前缀
 * @param {*} method GET POST
 * @param {*} data 附带的数据
 * @param {*} showLoading 请求时是否显示loading
 * @param {*} defaultMsg 出错时默认的信息
 * @param {*} hideLoading 是否隐藏loading，适用于在请求前就加了loading效果，请求完成自动隐藏loading
 */
/* eslint arrow-body-style: ["error", "always"] */
const request = (url, method, data, showLoading, defaultMsg, hideLoading = false) => {
  return new Promise((resolve, reject) => {
    if (showLoading) {
      wx.showLoading({
        title: '加载中',
      });
    }
    wx.request({
      data,
      method,
      header,
      url: path + url,
      success: (res) => {
        if (showLoading || hideLoading) {
          wx.hideLoading();
        }
        if (res.header['Set-Cookie']) {
          header.Cookie = res.header['Set-Cookie'];
        }
        if (res.data.success) {
          resolve(res.data.data);
        } else {
          let msg = (res.data.success === false) && res.data.msg;
          msg = defaultMsg || msg; // 优先显示自定义的
          if (msg) {
            wx.showToast({
              icon: 'none',
              title: msg,
            });
          }
          reject(res.data);
        }
      },
      fail() {
        if (showLoading || hideLoading) {
          wx.hideLoading();
        }
        wx.showToast({
          icon: 'none',
          title: '网络异常，加载失败',
        });
        reject();
      },
    });
  });
};

function get(option) {
  return request(option.url, 'GET', option.data);
}
// post请求
export function post(option) {
  if (!option.url) return new Promise().reject('缺少url参数');
  return request(option.url, 'POST', option.data || {}, option.showLoading || false, option.defaultMsg || '', option.hideLoading || false);
}

// toast
export function showToast(msg, duration = 1500) {
  wx.showToast({
    icon: 'none',
    title: msg,
    duration,
  });
}

/**
 * upload 上传图片
 * http://114.215.173.137:8190/pages/viewpage.action?pageId=7610922
 * @param {String} filePath 上传图片路径
 * @param {String} fileType head_img或者diary_img
 */
export function upload(filePath, fileType = 'head_img') {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: `${path}bh/r/upload/uploadFile`,
      filePath,
      header,
      name: 'file',
      formData: {
        fileType,
      },
      success(res) {
        if (res.statusCode === 200) {
          const respData = JSON.parse(res.data);
          if (respData.success) {
            return resolve(respData.data);
          } else if (respData.msg) {
            showToast(respData.msg);
            return reject();
          }
        }
        return reject(res);
      },
      fail() {
        reject();
      },
    });
  });
}

// 添加formId
export function addFormId(formId) {
  // 去除开发者工具产生的formId
  if (formId.indexOf('the formId') > -1) { // eslint-disable-line
    console.log(formId);
    return;
  }
  request('bh/r/stat/addFormId', 'GET', { formId }).then((resp) => {
    console.log(resp);
  });
}

/**
 * 同步获取storage
 * @param {String} key
 * @param {*} defaultValue 当没有获取到的时候，返回默认值
 */
export function getStorage(key, defaultValue = null) {
  try {
    return wx.getStorageSync(`${name}-${key}`) || defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

/**
 * 同步设置storage
 * @param {String} key
 * @param {Object|String} value
 */
export function setStorage(key, value) {
  try {
    wx.setStorageSync(`${name}-${key}`, value);
  } catch (e) {
    // error
  }
}

/**
 * 清除缓存
 * @param {*} key 指定的key
 */
export function removeStorage(key) {
  try {
    wx.removeStorageSync(`${name}-${key}`);
  } catch (e) {
    // Do something when catch error
  }
}

/**
 * 替换string中的emoji
 * @param {*} str 替换的str
 */
export function delEmoji(str) {
  const reg = /([^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n])|(\s)/g;
  let replaceStr = str;
  if (reg.test(str)) {
    console.log(`hh:${str}`);
    replaceStr = str.replace(reg, '');
  }
  console.log(replaceStr);
  return replaceStr;
}

export function log() {
  // !!!!这个方法不要用箭头函数，不然没有arguments
  if (!arguments.length) return;

  let isEmptyObj = true;
  const record = arguments[0]; // eslint-disable-line
  let url = `bh/r/stat/addStatLog?t=${Date.now()}&source=minibhapp&bizType=YBXG`;

  for (let i in record) { // eslint-disable-line
    url += "&"+i+"="+ encodeURIComponent(record[i]); // eslint-disable-line
    isEmptyObj = false;
  }
  if (!isEmptyObj) {
    request(url, 'GET');
  }
}

export function goLogin() {
  wx.navigateTo({
    url: '/pages/login/main',
  });
}

export default {
  get,
  post,
  getStorage,
  setStorage,
  removeStorage,
  upload,
  showToast,
  delEmoji,
  log,
  goLogin,
};
