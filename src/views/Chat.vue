<template>
  <div class="chat">
    <h1>{{ name }}</h1>
    <div class="body">
      <div class="item" v-for="item in msgList" :key="item.key">
        <MsgCard :info="item" :userId="userId" />
      </div>
    </div>
    <div class="footer">
      <input
        placeholder="请输入"
        v-model.trim="inputValue"
        @keyup.enter="inputHandle"
      />
    </div>
  </div>
</template>

<script>
import MsgCard from "@/components/MsgCard";
export default {
  components: {
    MsgCard,
  },
  data() {
    const { id, name } = this.$route.params;
    return {
      id,
      name,
      inputValue: "",
      socket: null,
      userId: "17232",
      msgList: [
        { userId: "111", msg: "在?", dateTime: "2020-10-05 10:11:10" },
        { userId: "123", msg: "找我干嘛", dateTime: "2020-10-05 10:11:15" },
        { userId: "111", msg: "打游戏不咯", dateTime: "2020-10-05 10:15:10" },
      ],
    };
  },
  methods: {
    inputHandle(e) {
      if (!window.WebSocket) return;
      if (this.socket.readyState === WebSocket.OPEN) {
        const message = {
          type: "sendTo",
          sendToUser: {
            type: "",
            appCode: "",
            userCode: this.userId,
          },
          content: e.target.value,
        };
        this.socket.send(JSON.stringify(message));
        // this.msgList.push({ userId: this.userId, msg: e.target.value });
      }
      this.inputValue = "";
    },
  },

  created() {
    console.log("created");
    if (!window.WebSocket) {
      window.WebSocket = window.MozWebSocket;
    }
    if (window.WebSocket) {
      const socket = new WebSocket(
        "wss://xxxxxxx.com/xxx/ws/xxxxxx/ws?type=PC&appCode=1&appName=移动&userCode=17232&userName=张三&isMultiton=true"
      );
      socket.onmessage = (ev) => {
        console.log(`收到消息：${ev.data}`);
        const { content, sender } = JSON.parse(ev.data) || {}
        this.msgList.push({ userId: sender.userCode, msg: content });
      };
      socket.onopen = () => {
        console.log("创建websocket连接成功");
      };
      socket.onclose = () => {
        console.log("websocket连接关闭");
      };
      socket.onerror = (ev) => {
        console.log(ev.data);
      };
      this.socket = socket;
    } else {
      console.error("您的浏览器不支持 WebSocket");
    }
  },
};
</script>

<style lang="scss" scoped>
.chat {
  background-color: #f3f6f9;
  h1 {
    position: fixed;
    width: 100%;
    top: 0;
    margin: 0;
    padding: 15px;
    background-color: #fff;
    font-size: 15px;
    font-weight: 500;
    color: #333333;
    line-height: 21px;
    text-align: left;
  }
  .body {
    min-height: 100vh;
    padding: 50px 15px 70px;
    .item {
      margin-top: 20px;
    }
  }
  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 12px 15px;
    background: #fff;
    input {
      background-color: #f5f5f5;
      border: none;
      width: 100%;
      padding: 10px;
      border-radius: 2px;
    }
  }
}
</style>
