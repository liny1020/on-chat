<template>
  <div>
    <!-- <div class="topbar"></div> -->
    <div class="nav d-flex">
      <div
        class="nav-item"
        :class="{ active: activeTab === 'msg' }"
        @click="activeTab = 'msg'"
      >
        <router-link class="nav-link" to="/">消息</router-link>
      </div>
      <div
        class="nav-item"
        :class="{ active: activeTab === 'contacts' }"
        @click="activeTab = 'contacts'"
      >
        <router-link class="nav-link" to="/contacts">通讯录</router-link>
      </div>
      <div
        class="nav-item"
        :class="{ active: activeTab === 'user' }"
        @click="activeTab = 'user'"
      >
        <router-link class="nav-link" to="/user">我的</router-link>
      </div>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "msg",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.8rem 0 0.6rem;
  justify-content: space-around;
  background: #fff;

  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.08);
  font-size: 15px;
  font-weight: 500;
  color: #333333;
  line-height: 21px;
  .nav-item {
    padding-bottom: 0.2rem;
    border-bottom: 3px solid transparent;
    &.active {
      border-bottom: 3px solid #3e82fe;
    }
  }
}
.view {
  height: calc(100vh - 45px);
  // background: #fff;
}
</style>
