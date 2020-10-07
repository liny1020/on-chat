<template>
  <div class="box">
    <img src="@/assets/avator.svg" />
    <div class="info">
      <div class="header">
        <span> {{ info.name }}</span>
        <span> {{ info.dateTime }} </span>
      </div>
      <div class="content">
        {{ info.lastMsg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsgBox",
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  padding: 20px 15px;
  background: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  .info {
    margin-left: 15px;
    flex: 1;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      &:first-child {
        font-size: 16px;
        font-weight: 600;
        color: #333333;
        line-height: 22px;
      }
      &:last-child {
        font-size: 12px;
        font-weight: 500;
        color: #999999;
        line-height: 17px;
      }
    }
  }
  .content {
    margin-top: 7px;
    font-size: 14px;
    font-weight: 500;
    color: #999999;
    line-height: 20px;
    text-align: left;
  }
}
</style>
