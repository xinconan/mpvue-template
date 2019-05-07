<template>
  <web-view :src="url"></web-view>
</template>

<script>

export default {
  data() {
    return {
      url: '',
    };
  },

  onLoad() {
    const query = this.$root.$mp.query;
    this.url = query.url;
  },
};
</script>
