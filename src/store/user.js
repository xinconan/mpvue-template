import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const user = new Vuex.Store({
  state: {
    userInfo: {},
    shareQr: '', // 专项分享二维码
    shareUserId: '', // 分享者用户id
  },
  mutations: {
    update: (state, payload) => {
      const obj = state;
      obj.userInfo = payload.userInfo;
      // setStorage('useInfo', obj.userInfo);
    },
    // 更新分享二维码
    qr: (state, payload) => {
      const obj = state;
      obj.shareQr = payload;
    },
  },
  actions: {
  },
});

export default user;
