<template>
  <div class="box">
    <div class="content">
      <div>约等于</div>
      <div style="fontsize: 25px"></div>
      <!-- 上面下拉框 -->
      <div id="fd-1">
        <div id="fd-1-s">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in countryList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div id="fd-3-i">
          <el-input v-model="iptFrom"></el-input>
        </div>
      </div>
      <!-- 下面下拉框 -->
      <div id="fd-2">
        <!-- 左边 -->
        <div id="fd-1-s">
          <el-select v-model="select2">
            <option
              v-for="item in countryList"
              :key="item.id"
              :label="item.name"
              :value="item.key"
            ></option>
          </el-select>
        </div>
        <!-- 右边 -->
        <div id="fd-3-i">
          <el-input v-model="iptTo"></el-input>
        </div>
      </div>
      <div id="fd-3">
        <div class="right" @click="count()">||</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //eg:https://blog.csdn.net/liuhandi/article/details/119244911
    return {
      select1: "1", //countryList中的id
      select2: "1",
      iptFrom: "",
      iptTo: "",
      // countryList: [
      //   { id: "1", key: "CNY", name: "CNY   人民币" },
      //   { id: "2", key: "USD", name: "USD   美元" },
      //   { id: "3", key: "EUR", name: "EUR   欧元" },
      //   { id: "4", key: "GBP", name: "GBP   英镑" },
      //   { id: "5", key: "JPY", name: "JPY   日元" },
      //   { id: "6", key: "HKD", name: "HKD   港币" },
      //   { id: "7", key: "AUD", name: "AUD   澳元" },
      //   { id: "8", key: "CAD", name: "CAD   加元" },
      // ],
      countryList: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      rates: new Map([
        ["CNY", 1],
        ["USD", 0.1569],
        ["EUR", 0.1385],
        ["GBP", 0.1155],
        ["JPY", 18.1707],
        ["HKD", 1.2234],
        ["AUD", 0.1385],
        ["CAD", 0.1984],
      ]),
    };
  },
  methods: {
    count() {},
  },
};
</script>

<style lang='scss' scoped>
.content {
  /* width: 500px;
  height: 300px;
  border: 1px solid #ccc; */
  position: relative;
  top: 500px;
  left: 30%;
}
#fd-f {
  /*text-align: center;*/
  width: 100%;
  height: 100%;
}
#fd-h {
  width: 500px;
  height: 50px;
  font-size: 32px;
  background-color: cornflowerblue;
}
#fd-1 {
  width: 500px;
  height: 50px;
  font-size: 20px;
  border: 1px solid rgb(238, 233, 233);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#fd-1-s {
  height: 100%;
  width: 30%;
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: lightgray;
  select {
    width: 100%;
    height: 100%;
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    border: none;
    outline: none;
    /*很关键：将默认的select选择框样式清除*/
    // appearance:none;
    // -moz-appearance:none;
    // -webkit-appearance:none;
    /*将背景改为红色*/
    background: #fff;
    /*加padding防止文字覆盖*/
    padding-right: 0.14rem;
    background-color: rgb(252, 250, 250);
  }
}
#fd-2 {
  width: 500px;
  height: 50px;
  font-size: 20px;
  // background-color: lightsteelblue;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
}
#fd-2-s {
  height: 35px;
  width: 100px;
  border-radius: 8px;
}
#fd-3 {
  width: 50px;
  height: 120px;
  font-size: 20px;
  background-color: rgb(255, 253, 247);
  position: relative;
  left: 24%;
  bottom: 120px;
  border: 1px solid #ccc;
  .right {
    padding-top: 40px;
    padding-left: 18px;
  }
}
#fd-3-i {
  height: 30px;
  width: 70%;
  border-radius: 8px;
  //   background-color: lightblue;
  input {
    width: 100%;
    height: 50px;
    background: none;
    outline: none;
    // border: 1px solid #ccc;
    text-indent: 230px;
    font-size: 20px;
    // background-color: lightskyblue;
    text-indent: 340px;
  }
  input:focus {
    border: none;
  }
}
#fd-3-b {
  width: 90px;
  height: 35px;
  background-color: cornflowerblue;
  font-size: 18px;
  border-radius: 8px;
}
#fd-x {
  border: none;
  border-top: 1px dashed blue;
  width: 480px;
}
#fd-4 {
  width: 500px;
  height: 80px;
}
#fd-4-w {
  color: cornflowerblue;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
}
#fd-4-m {
  height: 100px;
  width: 490px;
  border: cornflowerblue 1px solid;
  border-radius: 10px;
  margin: 10px auto;
  text-align: center;
  font-size: 20px;
}
#fd-4-1 {
  line-height: 20px;
  text-align: center;
  font-size: 20px;
}
#fd-4-d {
  line-height: 10px;
  text-align: center;
  font-size: 18px;
  color: cornflowerblue;
}
</style>