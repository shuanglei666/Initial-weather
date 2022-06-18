<template>
  <div class="box">
    <div style="width: 290px; height: 80px; margin: 0 auto">
      <span>选项1：{{ firstCode }}</span>
      <span>选项1：{{ value2 }}</span>
    </div>
    <div class="content">
      <div class="zero">
        <span>{{ iptFrom }} {{ firstName }}</span>
        <span>{{ iptTo }} {{ secondName }}</span>
      </div>
      <div class="one">
        <div class="left">
          <div class="lft_top">
            <div>
              <el-select
                style="width: 150px"
                v-model="value1"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in list2"
                  :key="item.name"
                  :label="item.code + item.name"
                  :value="item.code + item.name"
                >
                </el-option>
              </el-select>
            </div>
            <div>
              <!-- 千米 -->
              <el-input
                @focus="focus1"
                type="number"
                v-model="iptFrom"
                placeholder="请输入出发"
              ></el-input>
            </div>
          </div>
          <div class="lft_bottom">
            <div>
              <el-select
                style="width: 150px"
                v-model="value2"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in list2"
                  :key="item.name"
                  :label="item.code + item.name"
                  :value="item.code + item.name"
                >
                </el-option>
              </el-select>
            </div>
            <div>
              <!-- 米 -->
              <el-input
                @focus="focus2"
                type="number"
                v-model="iptTo"
                placeholder="请输入到达"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="right">
          <el-button class="rgt_b" @click="getRata">转换</el-button>
        </div>
      </div>
    </div>
    <!-- <div>result:{{ result }}</div>
    总数：{{ total }} -->
  </div>
</template>

<script>
import { rataList, rata } from "../../services/getata";
export default {
  data() {
    return {
      key: "11", //
      value1: "CNY人民币", //出发
      value2: "USD美元", //目的
      options: [], //下拉列表
      result: [], //  获得汇率
      biaoji: 1,
      list2: [
        {
          name: "人民币",
          code: "CNY",
        },
        {
          name: "美元",
          code: "USD",
        },
        {
          name: "日元",
          code: "JPY",
        },
        {
          name: "欧元",
          code: "EUR",
        },
        {
          name: "英镑",
          code: "GBP",
        },
        {
          name: "韩元",
          code: "KRW",
        },
        {
          name: "港币",
          code: "HKD",
        },
        {
          name: "澳大利亚元",
          code: "AUD",
        },
        {
          name: "加拿大元",
          code: "CAD",
        },
        {
          name: "阿尔及利亚第纳尔",
          code: "DZD",
        },
        {
          name: "阿根廷比索",
          code: "ARS",
        },
        {
          name: "爱尔兰镑",
          code: "IEP",
        },
        {
          name: "埃及镑",
          code: "EGP",
        },
        {
          name: "阿联酋迪拉姆",
          code: "AED",
        },
        {
          name: "阿曼里亚尔",
          code: "OMR",
        },
        {
          name: "奥地利先令",
          code: "ATS",
        },
        {
          name: "澳门元",
          code: "MOP",
        },
        {
          name: "百慕大元",
          code: "BMD",
        },
        {
          name: "巴基斯坦卢比",
          code: "PKR",
        },
        {
          name: "巴拉圭瓜拉尼",
          code: "PYG",
        },
        {
          name: "巴林第纳尔",
          code: "BHD",
        },
        {
          name: "巴拿马巴尔博亚",
          code: "PAB",
        },
        {
          name: "保加利亚列弗",
          code: "BGN",
        },
        {
          name: "巴西雷亚尔",
          code: "BRL",
        },
        {
          name: "比利时法郎",
          code: "BEF",
        },
        {
          name: "冰岛克朗",
          code: "ISK",
        },
        {
          name: "博茨瓦纳普拉",
          code: "BWP",
        },
        {
          name: "波兰兹罗提",
          code: "PLN",
        },
        {
          name: "玻利维亚诺",
          code: "BOB",
        },
        {
          name: "丹麦克朗",
          code: "DKK",
        },
        {
          name: "菲律宾比索",
          code: "PHP",
        },
        {
          name: "芬兰马克",
          code: "FIM",
        },
        {
          name: "哥伦比亚比索",
          code: "COP",
        },
        {
          name: "古巴比索",
          code: "CUP",
        },
        {
          name: "哈萨克坚戈",
          code: "KZT",
        },
        {
          name: "加纳塞地",
          code: "GHC",
        },
        {
          name: "捷克克朗",
          code: "CZK",
        },
        {
          name: "津巴布韦元",
          code: "ZWD",
        },
        {
          name: "卡塔尔里亚尔",
          code: "QAR",
        },
        {
          name: "克罗地亚库纳",
          code: "HRK",
        },
        {
          name: "肯尼亚先令",
          code: "KES",
        },
        {
          name: "科威特第纳尔",
          code: "KWD",
        },
        {
          name: "老挝基普",
          code: "LAK",
        },
        {
          name: "拉脱维亚拉图",
          code: "LVL",
        },
        {
          name: "黎巴嫩镑",
          code: "LBP",
        },
        {
          name: "林吉特",
          code: "MYR",
        },
        {
          name: "立陶宛立特",
          code: "LTL",
        },
        {
          name: "卢布",
          code: "RUB",
        },
        {
          name: "罗马尼亚新列伊",
          code: "RON",
        },
        {
          name: "毛里求斯卢比",
          code: "MUR",
        },
        {
          name: "蒙古图格里克",
          code: "MNT",
        },
        {
          name: "孟加拉塔卡",
          code: "BDT",
        },
        {
          name: "缅甸缅元",
          code: "BUK",
        },
        {
          name: "秘鲁新索尔",
          code: "PEN",
        },
        {
          name: "摩洛哥迪拉姆",
          code: "MAD",
        },
        {
          name: "墨西哥元",
          code: "MXN",
        },
        {
          name: "南非兰特",
          code: "ZAR",
        },
        {
          name: "挪威克朗",
          code: "NOK",
        },
        {
          name: "瑞典克朗",
          code: "SEK",
        },
        {
          name: "瑞士法郎",
          code: "CHF",
        },
        {
          name: "沙特里亚尔",
          code: "SAR",
        },
        {
          name: "斯里兰卡卢比",
          code: "LKR",
        },
        {
          name: "索马里先令",
          code: "SOS",
        },
        {
          name: "泰国铢",
          code: "THB",
        },
        {
          name: "坦桑尼亚先令",
          code: "TZS",
        },
        {
          name: "新土耳其里拉",
          code: "TRY",
        },
        {
          name: "突尼斯第纳尔",
          code: "TND",
        },
        {
          name: "危地马拉格查尔",
          code: "GTQ",
        },
        {
          name: "委内瑞拉玻利瓦尔",
          code: "VEB",
        },
        {
          name: "乌拉圭新比索",
          code: "UYU",
        },
        {
          name: "希腊德拉克马",
          code: "GRD",
        },
        {
          name: "新加坡元",
          code: "SGD",
        },
        {
          name: "新台币",
          code: "TWD",
        },
        {
          name: "新西兰元",
          code: "NZD",
        },
        {
          name: "匈牙利福林",
          code: "HUF",
        },
        {
          name: "牙买加元",
          code: "JMD",
        },
        {
          name: "印度卢比",
          code: "INR",
        },
        {
          name: "印尼盾",
          code: "IDR",
        },
        {
          name: "以色列谢克尔",
          code: "ILS",
        },
        {
          name: "约旦第纳尔",
          code: "JOD",
        },
        {
          name: "越南盾",
          code: "VND",
        },
        {
          name: "智利比索",
          code: "CLP",
        },
        {
          name: "白俄罗斯卢布",
          code: "BYR",
        },
      ],
      iptFrom: 1, // value1数值
      iptTo: "", //  米value2数值
    };
  },
  mounted() {
    this.getSelect();
    // this.getRata();
  },
  computed: {
    // 获取选项一的code值
    firstCode() {
      return this.value1.substr(0, 3);
    },
    // 获取选项一的name值
    firstName() {
      return this.value1.substr(3, this.value1.length) + "约等于";
    },
    // 获取选项二的code值
    secondCode() {
      return this.value2.substr(0, 3);
    },
    // 获取选项二的name值
    secondName() {
      return this.value2.substr(3, this.value1.length);
    },
  },
  methods: {
    // Selection列表
    getSelect() {
      rataList({
        key: this.key,
      }).then((res) => {
        this.options = res.data.list;
        console.log(res, "data111");
      });
    },
    focus1() {
      console.log(2222);

      this.biaoji = 1;
    },
    focus2() {
      console.log(2222);
      this.biaoji = 2;
    },
    getRata() {
      //  这是汇率接口
      rata({
        key: this.key,
        from: this.firstCode,
        to: this.secondCode,
      })
        .then((res) => {
          if (this.biaoji == 1) {
            this.result = res.data[0].result;
            this.iptFrom = this.result * this.iptTo;
          } else if (this.biaoji == 2) {
            this.result = res.data[1].result;
            this.iptTo = this.result * this.iptFrom;
          }
        })
        .catch((err) => {
          console.log(err, 123);
        });
    }
  },
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  .content {
    width: 500px;
    height: 200px;
    background-color: blanchedalmond;
    margin-top: 10%;
    margin-left: 30%;
    display: flex;
    flex-direction: column;
    .zero {
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      background-color: bisque;
    }
    .one {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: row;
      background-color: rgb(215, 245, 237);
      .left {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .lft_top {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: row;
        }
        .lft_bottom {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: row;
        }
      }
      .right {
        width: 20%;
        height: 100%;
        border-left: 1px solid #ccc;
        .rgt_b {
          position: relative;
          top: 30%;
          left: 18px;
        }
      }
    }
  }
}
</style>