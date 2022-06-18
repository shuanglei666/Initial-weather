<template>
  <div class="box">
    黄金
    <div class="content">
      <div id="mainT" style="width: 500px; height: 350px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { gold } from "../../services/getata";
export default {
  data() {
    return {
      data: [
        {
          variety: "Ag(T+D)" /*品种*/,
          latestpri: "6585.00" /*最新价*/,
          openpri: "6712.00" /*开盘价*/,
          maxpri: "6721.00" /*最高价*/,
          minpri: "6581.00" /*最低价*/,
          limit: "-1.98%" /*涨跌幅*/,
          yespri: "6718.00" /*昨收价*/,
          totalvol: "1564524.0000" /*总成交量*/,
          time: "2012-12-19 15:29:59" /*更新时间*/,
        },
        {
          variety: "Au(T+D)",
          latestpri: "123.60",
          openpri: "341.00",
          maxpri: "341.40",
          minpri: "336.00",
          limit: "-1.52%",
          yespri: "341.81",
          totalvol: "22842.0000",
          time: "2012-12-19 15:29:30",
        },
        {
          variety: "Au(T+D)",
          latestpri: "456.60",
          openpri: "341.00",
          maxpri: "341.40",
          minpri: "336.00",
          limit: "-1.52%",
          yespri: "341.81",
          totalvol: "22842.0000",
          time: "2012-12-19 15:29:30",
        },
        {
          variety: "Au(T+D)",
          latestpri: "789.60",
          openpri: "341.00",
          maxpri: "341.40",
          minpri: "336.00",
          limit: "-1.52%",
          yespri: "341.81",
          totalvol: "22842.0000",
          time: "2012-12-19 15:29:30",
        },
      ],
      // data:[]
    };
  },
  created() {},
  mounted() {
    // this.getGold();
    this.DrawColumn();
  },
  methods: {
     getGold() {
      gold({
        key: "", //  
        v: "1",
      })
        .then((res) => {
          this.data = res.result;
          // console.log(res.result, "result~~~");
          // console.log(res.result[0], "AU99.99~~~");
          // this.$nextTick(() => {
          //   this.DrawColumn();
          // });
        })
        .catch((err) => {
          console.log(err, 123);
        });
    },
    DrawColumn() {
      let dataList = [];
      let dataList1 = [];
      let dataList2 = [];
      let dataList3 = [];
      let name = [];
      this.data.forEach((item, index) => {
        dataList.push(item.maxpri);
        dataList1.push(item.minpri);
        dataList2.push(item.openpri);
        dataList3.push(item.yespri);
        name.push(index);
      });
      var myChart = echarts.init(document.getElementById("mainT"));
      var option = {
        legend: {
          type: "scroll",
          right: 10,
          top: 20,
          bottom: 20,
          data: [],
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          // name: "时间",  //  x轴末尾显示 ->时间  隐藏掉也可以其他名称
          // data: this.data,
          data: name, // 拐点数据需要获取 和  xAxis里面data   时间点 同时获取~~~~~~~~~~~~~
          textStyle: {
            color: "#000", // 坐标字体颜色
          },
          // rotate: 0 // 坐标倾斜角度
          axisLine: {
            lineStyle: {
              color: "#000", // x坐标轴颜色
            },
          },
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
          textStyle: {
            color: "#000", // 坐标字体颜色
          },
          axisLabel: {
            // formatter: "{value} °C",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#000", // y坐标轴颜色
          },
          splitLine: {
            lineStyle: {
              color: "#000", //分隔线颜色设置
            },
          },
        },
        series: [
          {
            name: "maxpri",
            type: "bar",
            stack: "Total",
            data: dataList,
          },
          {
            name: "minpri",
            type: "bar",
            stack: "Total",
            data: dataList1,
          },
          {
            name: "openpri",
            type: "bar",
            stack: "Total",
            data: dataList2,
          },
          {
            name: "yespri",
            type: "bar",
            stack: "Total",
            data: dataList3,
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
    width: 600px;
    height: 800px;
    background-color: antiquewhite;
  }
}
</style>