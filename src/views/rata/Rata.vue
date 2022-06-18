<template>
  <div class="box">
    <div class="content">
      <!-- <div id="fd-h">汇率查询转换器</div> -->
      <!-- <div>{{ v }}{{ bb }} {{ sn1 }}约等于</div> -->
      <div>{{ v }} {{ sn1 }}约等于</div>
      <div style="fontsize: 25px">{{ result }}{{ sn2 }}</div>
      <!-- 上面下拉框 -->
      <div id="fd-1">
        <div id="fd-1-s">
          <select v-model="select1">
            <option v-for="c in countryList" :key="c.id" :value="c.id">
              {{ c.name }}
            </option>
          </select>
        </div>
        <div id="fd-3-i">
          <input type="text" v-model="v" />
        </div>
      </div>
      <!-- 下面下拉框 -->
      <div id="fd-2">
        <!-- 左边 -->
        <div id="fd-1-s">
          <select id="fd-2-s" v-model="select2">
            <option v-for="c in countryList" :key="c.id" :value="c.id">
              {{ c.name }}
            </option>
          </select>
        </div>
        <!-- 右边 -->
        <div id="fd-3-i">
          <!-- <input type="text" v-model="bb" /> -->
          <input type="text" v-model="v" />
        </div>
      </div>
      <div id="fd-3">
        <div class="right" @click="count()">||</div>
      </div>
      <!-- <hr id="fd-x" />    分界线 -->
      <!-- <div id="fd-4">
        <div id="fd-4-w">{{ sn1 }}兑换{{ sn2 }}:</div>
        <div id="fd-4-m">
          <p id="fd-4-1">{{ v }} {{ s1 }} = {{ result }}{{ s2 }}</p>
          <hr id="fd-4-r" />
          <div id="fd-4-d">
            <p>当前汇率:{{ r }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
export default {
  data() {
    //eg:https://blog.csdn.net/liuhandi/article/details/119244911
    return {
      select1: "1", //countryList中的id
      select2: "3",
      s1: "CNY", //countryList中的key
      s2: "EUR",
      sn1: "人民币", //countryList中的name
      sn2: "欧元",
      result: "",
      r: "",
      d: "",
      v: "",
      // bb:"",
      key: "",
      countryList: [
        { id: "1", key: "CNY", name: "CNY   人民币" },
        { id: "2", key: "USD", name: "USD   美元" },
        { id: "3", key: "EUR", name: "EUR   欧元" },
        { id: "4", key: "GBP", name: "GBP   英镑" },
        { id: "5", key: "JPY", name: "JPY   日元" },
        { id: "6", key: "HKD", name: "HKD   港币" },
        { id: "7", key: "AUD", name: "AUD   澳元" },
        { id: "8", key: "CAD", name: "CAD   加元" },
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
    count() {
      this.s1 = this.countryList[this.select1 - 1].key;
      this.s2 = this.countryList[this.select2 - 1].key;
      this.sn1 = this.countryList[this.select1 - 1].name.substring(6);
      this.sn2 = this.countryList[this.select2 - 1].name.substring(6);
      this.r = this.rates.get(this.s2) / this.rates.get(this.s1);

      // this.d = this.rates.get(this.s1) / this.rates.get(this.s2)
      this.result = (this.v * this.r).toFixed(2);
      // this.result = (this.bb * this.d).toFixed(2);
    },
  },
  mounted() {
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



