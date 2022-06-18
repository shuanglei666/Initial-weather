<template>
  <div class="box">
    {{ date.health_code_name }}
    <div class="content">
      <!-- 下拉框 -->
      <div class="select">
        <div class="select_l">
          <span>出发城市:</span>
          <el-cascader
            v-model="setOutCityValue"
            :options="cityList"
          ></el-cascader>
          <span>目的地城市:</span>
          <el-cascader v-model="endValue" :options="cityList"></el-cascader>
        </div>
        <div class="select_r">
          <el-button @click="getSpringTravel">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div class="inf">
        <div class="inf_l">
          <div class="inf_l_l">右{{ fromData.health_code_desc }}</div>
        </div>
        <div class="inf_r">
          <div class="inf_r_r">左{{ toData.health_code_desc }}</div>
        </div>
      </div>
      <!-- 苏康码 -->
      <div class="code">
        <div class="inf_l">
          <div class="inf_l_l">左进{{ fromData.health_code_name }}</div>
          <div class="inf_l_img" v-if="isImgShow">
            <!-- 出发城市二维码 -->
            <img
              v-if="date.from_info['health_code_picture'].length != 0"
              class="code_img"
              :src="date.from_info['health_code_picture']"
              alt=""
            />
          </div>
        </div>
        <div class="inf_r">
          <div class="inf_r_r">右出{{ toData.health_code_name }}</div>
          <div class="inf_r_img" v-if="isImgShow">
            <!-- 目的地城市二维码 -->
            <img
              class="code_img"
              v-if="date.from_info['health_code_picture'].length != 0"
              :src="date.to_info['health_code_picture']"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="desc_info">
        进去公司 ： 低风险地区，进入政策描述 : {{ fromData.low_in_desc }}
      </div>
      <div class="desc_info">
        出去目的公司：低风险地区，进入政策描述 : {{ toData.low_in_desc }}
      </div>
      <!-- 出行政策描述 -->
      <div class="out">
        <div class="out_l">进去公司:行政策描述</div>
        <div class="out_r">
          <!-- 进：{{fromData.out_desc}}  出： {{toData.out_desc}}  -->
          进去公司{{ fromData.out_desc }}
        </div>
      </div>
      <div class="out">
        <div class="out_l">出去目的公司:行政策描述</div>
        <div class="out_r">出去目的公司：{{ toData.out_desc }}</div>
      </div>
      <!-- 新增确诊 -->
      <div class="add">
        <div class="add_l">新增确诊 进:{{ fromData.today_confirm }}</div>
        <div class="add_r">累计确诊进：{{ fromData.total_confirm }}</div>
      </div>
      <!-- 	治愈 -->
      <div class="cure">
        <div class="add_l">治愈进:{{ fromData.total_heal }}</div>
        <div class="add_r">死亡进：{{ fromData.total_dead }}</div>
      </div>
      <!-- 		更新时间 -->
      <div class="update">
        <div class="add_l">更新时间进:{{ fromData.updated_at }}</div>
        <div class="add_r">今日是否更新进:{{ fromData.is_updated }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { springTravel, citys } from "../../services/getata";
export default {
  data() {
    return {
      isImgShow: false,
      cityList: [], //城市列表
      setOutCityValue: "", //出发城市
      endValue: "", //目的地城市
      key: "111111",
      date: {},
      //~~~~~~~~~~~~~~~~~~~
      data: [],
      fromData: [], //  出发地城市
      toData: [], //  目的地城市
      fromCovidData: [], //  出发地城市-疫情数据
      toCovidData: [], //  出发地城市-疫情数据
    };
  },
  created() {
    this.getCitys(); //获取城市列表
  },
  methods: {
    // 重置
    reset() {
      this.setOutCityValue = this.endValue = [];
      this.date = {};
    },
    // 省份城市列表
    getCitys() {
      citys({
        key: this.key,
      }).then((res) => {
        res.data.forEach((item, index) => {
          // 添加省份
          this.cityList.push({
            label: item.province,
            value: item.province_id,
          });
          // 添加城市
          // let obj = {};
          // this.$set(obj, "a", "fdasjglasdj");
          //  obg=> {
          //   a: "fdasjglasdj";
          // };
          if (item.citys.length != 0) {
            this.$set(this.cityList[index], "children", []);
            item.citys.forEach((item2) => {
              this.cityList[index].children.push({
                label: item2.city,
                value: item2.city_id,
              });
            });
          }
        });
      });
    },
    // 根据城市id查询防疫政策
    getSpringTravel() {
      springTravel({
        // key: "11", //
        key: this.key,
        from: this.setOutCityValue[1], //  出发地城市ID
        to: this.endValue[1], //  目的地城市ID
      }).then((res) => {
        this.date = res.data;

        console.log(res.data, "~~~");

        this.fromData = res.data.from_info; //  出发地城市
        this.toData = res.data.to_info; //  目的地城市

        this.fromCovidData = res.data.from_covid_info; //  	出发地城市-疫情数据
        this.toCovidData = res.data.to_covid_info; //   出发地城市-疫情数据

        if (Object.keys(this.date).length != 0) {
          this.isImgShow = true; //渲染二维码
        }
        // console.log("```", this.date);
        // ~~~~~~~~~~~~~~~~~~~~
        console.log(res.data.to_info.health_code_desc, "health_code_desc~~~");
      });
    },
  },
};
</script>


<style lang='scss' scoped>
// .code_img {
//   width: 200px;
//   height: 200px;
//   vertical-align: middle;
// }

.box {
  width: 100%;
  .content {
    border: 1px solid #ccc;
    width: 45%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    // background-color: bisque;
    font-size: 15px;
    .select {
      width: 100%;
      height: 40px;
      // background-color: cornflowerblue;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      .select_l {
        width: 75%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span {
          line-height: 2.5;
        }
      }
      .select_r {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span {
          line-height: 2.5;
        }
      }
    }
    .inf {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      font-size: 15px;
      border-bottom: 1px solid#ccc;
      .inf_l {
        width: 50%;
        height: 100%;
        // background-color: cornflowerblue;
        display: flex;
        flex-direction: row;
        border-right: 1px solid #ccc;
        .inf_l_l {
          width: 40%;
          height: 100%;
          // background-color: rgb(60, 223, 223);
        }
        .inf_l_img {
          width: 60%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .inf_r {
        width: 50%;
        height: 100%;
        // background-color: antiquewhite;
        display: flex;
        flex-direction: row;
        font-size: 15px;
        .inf_r_r {
          width: 40%;
          height: 100%;
          // background-color: azure;
        }
        .inf_r_img {
          width: 60%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    // 苏康码
    .code {
      width: 100%;
      height: 200px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #ccc;
      .inf_l {
        width: 50%;
        height: 100%;
        // background-color: rgb(177, 110, 48);
        display: flex;
        flex-direction: row;
        border-right: 1px solid #ccc;
        .inf_l_l {
          width: 40%;
          height: 100%;
          // background-color: rgb(138, 23, 103);
        }
        .inf_l_img {
          width: 60%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .inf_r {
        width: 50%;
        height: 100%;
        // background-color: rgb(168, 59, 73);
        display: flex;
        flex-direction: row;
        .inf_r_r {
          width: 40%;
          height: 100%;
          // background-color: rgb(121, 56, 182);
        }
        .inf_r_img {
          width: 60%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    // 高低描述
    .high_low {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: row;
      .high_low_l {
        width: 50%;
        height: 100%;
        border-right: 1px solid #ccc;
        display: flex;
        flex-direction: column;
      }
      .high_low_r {
        width: 50%;
        height: 100%;
        border-right: 1px solid #ccc;
        display: flex;
        flex-direction: column;
      }
    }
    //描述
    .desc_info {
      width: 100%;
      height: 600px;
      // background-color: skyblue;
      border-bottom: 1px solid #ccc;
    }
    // 出行政策描述
    .out {
      width: 100%;
      height: 500px;
      display: flex;
      flex-direction: row;
      font-size: 15px;
      border-bottom: 1px solid #ccc;
      .out_l {
        width: 30%;
        // background-color: blanchedalmond;
        border-right: 1px solid #ccc;
      }
      .out_r {
        width: 70%;
        // background-color: aliceblue;
        border-right: 1px solid #ccc;
      }
    }
    // 新增确诊
    .add {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      .add_l {
        width: 50%;
        height: 100%;
        // background-color: coral;
        border-right: 1px solid #ccc;
      }
      .add_l {
        width: 50%;
        height: 100%;
        // background-color: snow;
      }
    }
    // 治愈
    .cure {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      .add_l {
        width: 50%;
        height: 100%;
        // background-color: coral;
        border-right: 1px solid #ccc;
      }
      .add_l {
        width: 50%;
        height: 100%;
        // background-color: snow;
      }
    }
    // 更新
    .update {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      .add_l {
        width: 50%;
        height: 100%;
        // background-color: coral;
        border-right: 1px solid #ccc;
      }
      .add_l {
        width: 50%;
        height: 100%;
        // background-color: snow;
      }
    }
  }
}
</style>