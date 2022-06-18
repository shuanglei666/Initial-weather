<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div>
    <!-- 11111111111 -->
    <!-- echarts -->
    <div id="main" class="btn"></div>
    <!-- 111111 -->
  </div>
</template>
<script>
import * as echarts from "echarts";
import { sweater } from "../../services/getata";
export default {
  data() {
    //  eg:  https://blog.csdn.net/QQ972618478/article/details/99292203
    return {
      // dates: {},
      list: [],
      // list: [
      //   {
      //     date: "2022-01-11",
      //     temperature: "-8/0℃",
      //     weather: "晴转多云",
      //     wid: {
      //       day: "00",
      //       night: "01",
      //     },
      //     direct: "南风转北风",
      //   },
      //   {
      //     date: "2022-01-12",
      //     temperature: "-7/3℃",
      //     weather: "晴",
      //     wid: {
      //       day: "00",
      //       night: "00",
      //     },
      //     direct: "北风",
      //   },
      //   {
      //     date: "2022-01-13",
      //     temperature: "-7/3℃",
      //     weather: "晴",
      //     wid: {
      //       day: "00",
      //       night: "00",
      //     },
      //     direct: "西南风",
      //   },
      //   {
      //     date: "2022-01-14",
      //     temperature: "-7/2℃",
      //     weather: "晴",
      //     wid: {
      //       day: "00",
      //       night: "00",
      //     },
      //     direct: "南风转北风",
      //   },
      //   {
      //     date: "2022-01-15",
      //     temperature: "-8/4℃",
      //     weather: "晴",
      //     wid: {
      //       day: "00",
      //       night: "00",
      //     },
      //     direct: "西北风转北风",
      //   },
      // ],
      newdate: [],
    };
  },
  mounted() {
    this.sweaterFun();
    // this.drawEct();
  },

  methods: {
    // 还有就是掉用接口之后，使用注册方法，注意：这里注册的方法是折线图echarts ，而不是 注册在mounted里面，若是在里面，则不会显示折线图
    sweaterFun() {
      sweater({
        key: "5045d39518d1a7f4aa797a803c90b0d7", // 5045d39518d1a7f4aa797a803c90b0d7
        city: "北京",
      }).then((res) => {
        console.log(res.data.future, "future~~~~~~");
        this.list = res.data.future;
        this.$nextTick(() => {
          this.drawEct();
        });
      });
    },
    //
    drawEct() {
      this.list.map(
        (item) =>
          (item.temperature = item.temperature.replace("℃", "").split("/"))
      );
      // this.list.forEach(item => {
      //   item.temperature = item.temperature.replace("℃","").split("/")
      // })
      let lowtep = [];
      let hightep = [];
      let date = [];
      this.list.forEach((item) => {
        lowtep.push(item.temperature[0]);
        hightep.push(item.temperature[1]);
        date.push(item.date);
      });

      // console.log(lowtep, 111111);
      // console.log(hightep, 333333333333);
      // console.log(date,11111111)

      // let that = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          // text: '实时温度',
          x: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          // name:'时间',
          // type: 'time',
          type: "category",
          // name: "时间",  //  x轴末尾显示 ->时间  隐藏掉也可以其他名称
          data: date,
          // data: ["A", "B", "C", "D", "E"], // 拐点数据需要获取 和  xAxis里面data   时间点 同时获取~~~~~~~~~~~~~
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
          textStyle: {
            color: "#000", // 坐标字体颜色
          },
          // rotate: 0 // 坐标倾斜角度
          scale: true, //纵坐标起始点根据最低值变化
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
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
            name: "最高温度",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#000", // 折现颜色
                },
              },
            },
            // data: [],
            // data: [],   // 拐点数据需要获取
            data: hightep, // 拐点数据需要获取 和  xAxis里面data 同时获取~~~~~~~~~~~~~
            type: "line",
            label: {
              show: true, // 折线上的文字是否显示
              formatter: "{c}" + "℃", // 格式化显示文字
              // formatter: '{value} '，
              position: "top",
              textStyle: {
                fontSize: 12,
                color: "#000", //  折线上面文字颜色
              },
            },
          },
          {
            name: "最低气温",
            type: "line",
            data: lowtep,
            markPoint: {
              data: [
                {
                  type: "min",
                  name: "最小值",
                },
              ],
            },
            label: {
              show: true, // 折线上的文字是否显示
              formatter: "{c}" + "℃", // 格式化显示文字
              // formatter: '{value} '，
              position: "top",
              textStyle: {
                fontSize: 12,
                color: "#000", //  折线上面文字颜色
              },
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
.btn {
  width: 800px;
  height: 410px;
}
</style>
