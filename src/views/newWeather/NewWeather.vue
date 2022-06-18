<template>
  <div class="box">
    <div class="content">
      <div class="top">
      </div>
      <div class="ctr">
        <!-- 左边 -->
        <div class="cet_lft">
          <div class="cet_lft_sun">
              <img src="../../assets/img/qingtian.png" alt="aaa">
          </div>
          <div class="cet_lft_spn">
            <span>{{ realtime.temperature }}°</span>
            <span>{{ realtime.info }}</span>
            <span>
              {{ realtime.direct }} < {{ realtime.direct }}
              {{ realtime.power }}
            </span>
          </div>
        </div>
        <!-- 右边整体循环 -->
        <div class="cet_rgt" v-for="(item, index) in date" :key="index">
          <div class="cet_rgt_a">
            <span>周日</span>
            <span>{{ item.date }}</span>
          </div>
          <div class="cet_rgt_b">
            <img src="../../assets/img/qingtian.png" alt="aaa">
          </div>
          <div class="cet_rgt_c">
            <span>{{ item.temperature }}</span>
            <span>{{ item.weather }}</span>
            <!-- <span>{{ item.direct }} </span> -->
          </div>
          <!-- <div class="cet_rgt_d">
            <span>轻度</span>
          </div> -->
        </div>
      </div>
      <!-- 质量 -->
      <!-- <div class="degree">
        <div v-for="(item, index) in quality" :key="index">
          <span>{{ item }}</span>
        </div>
      </div> -->
      <div class="btn">
        <Weather class="btn_box"></Weather>
      </div>
    </div> 
  </div>
</template>

<script type="text/javascript">
import { sweater, wards, showInfos } from "../../services/getata.js";
import Weather from '../../views/weatherEats/Weather.vue'

export default {
  components:{
    Weather
  },
  data() {
    return {
      date: {}, // 天气变化
      time: {},
      realtime: {},
      data: {},
      quality: [],
    };
  },
  watch: {},
  mounted() {
    this.getSweater(); // 日期周几天气
    
    // var arr = [1,2,3,4,5,6,7];
    // 区别
    // a.相同点
    // item:为数组每一项
    // index:为数组索引
    // array:为原始数组
    // b.不同点:
    // forEach没有返回值return
    // map有返回值retrun
    
    // (1)forEach
    // const map1 = arr.forEach((item,index,array) => {
    //     console.log(item)    //  1,2,3,4,5,6,7
    // })
      
    // (2)map
    // const map1 = arr.map((item,index,array) => {
    //     return item
    // })
    // console.log(map1)      //  1,2,3,4,5,6,7
  },
  methods: {
    getSweater() {
      // 温度日期风接口
      sweater({
        key: "5045d39518d1a7f4aa797a803c90b0d7",//5045d39518d1a7f4aa797a803c90b0d7
        city: "唐山",
      }).then((res) => {
        console.log('~~~',res);
        this.date = res.data.future;
        this.realtime = res.data.realtime;
        // console.log(res.data.realtime,'~~~')
        // console.log('~~~',this.data);

        
        //  this.date.map(
        //   (item) =>
        //     (item.temperature = item.temperature.replace("℃", "").split("/"))
        // );
        // let time = [];
        // this.date.forEach((item) => {
        //   time.push(item.time);
        // });
        // console.log(time,'time~~~')
      });
    },
    // 空气质量接口
    getWards() {
      wards({ key: "", word: "希望" }).then(
        (res) => {
          this.quality = res.data.words;
          console.log(res.data.words, "~~~~~~~~~~");
        }
      );
    },
    // 调用时间接口
    getShowInfos() {
      //  
      showInfos({ key: "", c: "asia" }).then(
        (res) => {
          this.data = res.data.tz;
          console.log(res.data.tz, "~~~~~~~~~~");
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .content {
    width: 800px;
    height: 900px;
    background-color: bisque;
    display: flex;
    flex-direction: column;
    .top {
      width: 100%;
      height: 200px;
      // height: 10%;
      background-color: pink;
    }
    .ctr {
      width: 100%;
      height: 50%;
      display: flex;
      background-color: aliceblue;
      .cet_lft {
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .cet_lft_sun {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img{
            width: 121px;
            height: 115px;
          }
        }
        .cet_lft_spn {
          width: 100%;
          height: 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .cet_lft_btn {
          height: 10%;
        }
      }
      .cet_rgt {
        width: 17.5%;
        height: 100%;
        border-left: 1px solid #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .cet_rgt_a {
          width: 100%;
          height: 20%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
        .cet_rgt_b {
          width: 100%;
          height: 30%;
          text-align: center;
          img{
            width: 100%;
            height: 88%;
          }
        }
        .cet_rgt_c {
          width: 100%;
          height: 30%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
        .cet_rgt_d {
          width: 100%;
          height: 20%;
          span {
            margin: 0 auto;
          }
        }
      }
    }
    .degree {
      width: 100%;
      height: 10%;
      background-color: darkturquoise;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .btn{
      width: 100%;
      height: 50%;
      background-color:whitesmoke;
      .btn_box{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<!-- 15 -->