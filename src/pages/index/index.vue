<template>
  <div>
    首页
  </div>
</template>

<script>
import user from '@/store/user';

export default {
  computed: {
    userInfo() {
      return user.state.userInfo;
    },
  },
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
  onShareAppMessage() {
    // 分享的回调
    return {
      title: 'Mpvue 测试分享',
      path: `/pages/index/main?shareId=${user.state.userInfo.userId || ''}&from=share`,
    };
  },
};
</script>

<style scoped lang="scss">

</style>
