<template>
  <div class="card">
    <p v-if="info.userId === userId">{{ info.dateTime }}</p>
    <div class="content" :class="{ my: info.userId === userId }">
      <img src="@/assets/avator.svg" />
      <span class="info">{{ info.msg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsgCard",
  props: {
    info: Object,
  },
  data() {
    return {
      userId: "123",
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 20px 0;
}
.content {
  display: flex;
  align-items: flex-start;
  .info {
    margin: 0 8px;
    padding: 8px 15px;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    line-height: 20px;
    max-width: 60%;
    text-align: left;
  }
  &.my {
    flex-direction: row-reverse;
    .info {
      background: #c6e5ff;
    }
  }
}
</style>
