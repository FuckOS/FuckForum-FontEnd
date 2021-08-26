<template>
  <div class="center">
    <h1>404 Not Found.</h1>
    <p>{{ second }} 秒后返回上一页</p>
  </div>
</template>

<script>
export default {
  name: "NotFouund",
  methods: {
    backPrev() {
      if (this.$store.state.RouterData.history_num > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    },
    backHome() {
      this.$router.replace({
        name: this.$config.homeName,
      });
    },
  },
  data() {
    return {
      second: 3,
      timer: null,
    };
  },
  mounted() {
    this.path = this.$route.query.path;
    if (!this.path) {
      this.timer = setInterval(() => {
        if (this.second === 1) this.backPrev();
        else this.second--;
      }, 1000);
    } else {
      this.timer = setInterval(() => {
        if (this.second === 1) this.$router.push(this.path);
        else this.second--;
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less">
.center {
  position: relative;
  top: 400px;
  text-align: center;
}
</style>