<template>
  <div class="box">
    <!-- 黄金11111111111111111 -->
    <div class="content">
      <div id="mainT" style="width: 100%; height: 800px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { gold } from "../../services/getata";
export default {
  data() {
    return {
      data: [],
      // data: [],
      newData: [],
      latestpri: [],
      yespri: [],
      variety: [],
      openpri: [],
      maxpri: [],
      minpri: [],
      time: [],
      newTime: [],
    };
  },
  created() {
    // this.getGold();
  },
  mounted() {
    // console.log(Object.keys(this.data[0]), "~~~~~~~~~~~~`");
    this.getGold();
    // this.DrawColumn();
  },
  methods: {
    getGold() {
      gold({
        key: "76b28829b16deb57f9e1e0d0b9f658e1", //
        v: "1",
      })
        .then((res) => {
          this.data = res.result[0]; //  一个对象
          console.log(this.data, "data~~~");
          Object.keys(this.data).forEach((item) => {
            console.log(item, "————~~~~~");
            let list = this.data[item].latestpri;
            if (list.indexOf("-") == -1)
              this.latestpri.push(this.data[item].latestpri); // 注释
            // this.title.push(item); // 标题
            if (this.data[item].yespri.indexOf("-") == -1)
              //
              this.yespri.push(this.data[item].yespri);

            if (this.data[item].openpri.indexOf("-") == -1)
              this.openpri.push(this.data[item].openpri);

            this.variety.push(this.data[item].variety); //  品种

            this.time.push(this.data[item].time.substr(10, 18));

            if (this.data[item].maxpri.indexOf("-") == -1)
              this.maxpri.push(this.data[item].maxpri);

            if (this.data[item].minpri.indexOf("-") == -1)
              this.minpri.push(this.data[item].minpri);
          }); //
          this.$nextTick(() => {
            this.DrawColumn();
          });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    },
    DrawColumn() {
      // 基于准备好的dom，初始化echarts实例 有这个数据吗
      var myChart = echarts.init(document.getElementById("mainT"));
      var option = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: this.time,
        },
        yAxis: {
          type: "value",
          axisLine: {
            //y轴
            show: false,
          },
          axisTick: {
            //刻度线
            show: false,
          },
          splitLine: {
            //网格线
            show: true,
          },
        },
        series: [
          {
            data: this.latestpri,
            type: "bar",
          },
          {
            data: this.yespri,
            type: "bar",
          },
          {
            data: this.openpri,
            type: "bar",
          },
          {
            data: this.maxpri,
            type: "bar",
          },
          {
            data: this.minpri,
            type: "bar",
          },
        ],
      };
      //  使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .content {
    width: 100%;
    height: 800px;
    /* background-color: antiquewhite; */
  }
}
</style>

// https://www.cnblogs.com/wxcbg/p/10453215.html

// let variety = [];
// let latestpri = [];
// let openpri = [];
// let maxpri = [];
// let minpri = [];
// let limit = [];
// let yespri = [];
// let totalvol = [];
// let time = [];
// this.data.forEach((item) => {
// variety.push(item.variety);
// latestpri.push(item.latestpri);
// openpri.push(item.openpri);
// maxpri.push(item.maxpri);
// minpri.push(item.minpri);
// limit.push(item.limit);
// yespri.push(item.yespri);
// totalvol.push(item.totalvol);
// time.push(item.time);
// });



// var option = {
// //画布背景色设置
// backgroundColor: "#f1f1f1",
// title: {
// text: "这个是主标题",
// textStyle: {
// //设置主标题字体颜色
// color: "#90E5E7",
// },
// subtext: "这个是副标题",
// },
// tooltip: {
// trigger: "axis",
// },
// legend: {
// data: ["分类一", "分类二"],
// },
// toolbox: {
// show: true,
// feature: {
// dataView: { show: true, readOnly: false },
// magicType: { show: true, type: ["line", "bar"] },
// restore: { show: true },
// saveAsImage: { show: true },
// },
// },
// calculable: true,
// xAxis: [
// {
// type: "category",
// data: [
// "1月",
// "2月",
// "3月",
// "4月",
// "5月",
// "6月",
// "7月",
// "8月",
// "9月",
// "10月",
// "11月",
// "12月",
// ],
// },
// ],
// yAxis: [
// {
// type: "value",
// axisLine: {
// //y轴
// show: false,
// },
// axisTick: {
// //刻度线
// show: false,
// },
// splitLine: {
// //网格线
// show: true,
// },
// },
// ],
// series: [
// {
// name: "蒸发量",
// type: "bar",
// //设置柱状图宽度
// barWidth: "13",
// data: [
// 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
// 3.3,
// ],
// itemStyle: {
// normal: {
// //柱形图圆角，顺时针左上，右上，右下，左下）
// barBorderRadius: [12, 12, 12, 12],
// //设置柱状图颜色渐变
// color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
// {
// offset: 0,
// color: "#f75d5d",
// },
// {
// offset: 1,
// color: "#f0caca",
// },
// ]),
// },
// },
// },
// {
// name: "降水量",
// type: "bar",
// //设置柱状图宽度
// barWidth: "13",
// //柱状图间距
// barGap: "200%",
// data: [
// 26.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
// 26.3,
// ],
// itemStyle: {
// normal: {
// // 统一设置四个角的圆角大小
// barBorderRadius: 12,
// //设置柱状图颜色渐变
// color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
// {
// offset: 0,
// color: "#5ad9e8",
// },
// {
// offset: 1,
// color: "#caecf0",
// },
// ]),
// },
// },
// },
// ],
// };
