<template>
  <div class="home">
    <div class="cardDiv" v-for="item in datalist" :key="item.key">
      <router-link :to="{ name: 'Chat', params: { id: item.userId, name: item.name } }">
        <MsgBox :info="item" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MsgBox from "@/components/MsgBox.vue";

export default {
  name: "Home",
  components: {
    MsgBox,
  },
  data() {
    return {
      datalist: [
        {
          userId: "123",
          name: "nicknameA",
          dateTime: "2020.10.02 15:00",
          lastMsg: "来打王者呀！",
        },
        {
          userId: "234",
          name: "nicknameB",
          dateTime: "2020.10.02 15:00",
          lastMsg: "明天继续加班～",
        },
        {
          userId: "345",
          name: "nicknameC",
          dateTime: "2020.10.02 15:00",
          lastMsg: "吃了没啊",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.home {
  padding: 1.2rem;
  background: #f3f6f9;
  .cardDiv {
    &:not(:first-child) {
      margin-top: 15px;
    }
  }
}
</style>
