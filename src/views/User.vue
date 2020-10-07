<template>
  <div class="user">
    <div class="card">
      <div class="info">
        <p>{{ name }}</p>
        <p>用户号：{{ userId }}</p>
      </div>
      <img src="@/assets/userAvator.jpg" />
    </div>
    <div class="btn">退出登录</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "User",
  components: {
    // HelloWorld
  },
  data() {
    return {
      name: "羊蜀黍",
      userId: "leon",
    };
  },
};
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  padding: 20px;
  .card {
    padding: 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    .info {
      text-align: left;
      p {
        font-size: 18px;
        font-weight: 500;
        &:last-child {
          font-size: 14px;
          color: #666;
        }
      }
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.45);
    }
  }
  .btn {
    margin-top: 30px;
    width: 100%;
    padding: 13px 0;
    text-align: center;
    color: #fff;
    background: linear-gradient(270deg, #72b8ff 0%, #3e82fe 100%);
    box-shadow: 0px 6px 10px 0px rgba(177, 204, 236, 0.9);
    border-radius: 8px;
  }
}
</style>
