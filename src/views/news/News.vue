// https://www.thinkphp.cn/topic/43399.html
// eg:https://www.jianshu.com/p/3c53231bd0e6
<template>
  <div class="box">
    <div class="content">
      <a
        :href="item.url"
        class="column"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="ctn">
          <div class="ctn_img">
            <img :src="item.thumbnail_pic_s" alt="没有找到" />
          </div>
          <div class="ctn_rgt">
            <div class="ctn_rgt_t">
              {{ item.title }}
            </div>
            <div class="ctn_rgt_b">
              <div class="ctn_rgt_b_l">{{ item.date }}</div>
              <div class="ctn_rgt_b_l">{{ item.author_name }}</div>
              <div class="ctn_rgt_b_l">{{ item.category }}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div>
      <ul>
        <li v-for="item in list">{{}}</li>
      </ul>
    </div>
  </div>
</template>



<script>
import { headLines } from "../../services/getata";
export default {
  data() {
    return {
      list: [],
      timer: 1,
    };
  },
  mounted() {
    this.getHeadLines();
  },
  methods: {
    getHeadLines() {
      headLines({
        key: "11",
      })
        .then((res) => {
          this.list = res.data.data;

          console.log(res.data.data, "data~~~~~");
          console.log(res.data); //  这个接口结构位置特殊res.data 正常接收数据   res.data后面还有一个data才能接收到最终的数据，层级
        })
        .catch((err) => {
          console.log(err, "报错了");
        });
    },
    //  getHeadLines() {
    //   headLines({
    //     key:''         //
    //   }).then((res) => {
    //     this.list = res.data;
    //     console.log(res.data, "data123123");
    //   }).catch(err => {
    //     console.log(err,'报错了')
    //   })
    // },
  },
};
</script>
<style lang='scss' scoped>
.box {
  width: 100%;
  .content {
    width: 40%;
    // background-color: snow;
    margin: 0 auto;
    .column {
      width: 100%;
      height: 200px;
      border-bottom: 1px solid rgb(51, 160, 211);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      .ctn {
        width: 95%;
        height: 80%;
        // background-color: burlywood;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // 左边
        .ctn_img {
          width: 20%;
          height: 100%;
          border-right: 1px solid #000;
          img {
            width: 100%;
            height: 100%;
          }
        }
        // 右边
        .ctn_rgt {
          width: 75%;
          height: 100%;
          // background-color: skyblue;
          .ctn_rgt_t {
            width: 100%;
            height: 80%;
            // background-color: rgb(235, 201, 161);
            font-size: 35px;
            font-weight: 300;
            color: #000;
          }
          .ctn_rgt_b {
            width: 100%;
            height: 20%;
            color: #ccc;
            // background-color: rgb(245, 230, 212);
            display: flex;
            flex-direction: row;
            justify-content: center;
            line-height: 1.8;
            font-size: 18px;
            .ctn_rgt_b_l {
              flex: 1;
              border-right: 1px solid #ccc;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>

      // 返回码: {{ item.error_code }} <br />
      // 返回说明:{{ item.reason }}<br />
      // 返回结果集: {{ item.result }}<br />
      // 新闻列表, 无数据时为null: {{ item.data }}<br />
      // 新闻ID: {{ item.uniquekey }}<br />
      // 新闻标题: {{ item.title }}<br />
      // 新闻时间: {{ item.date }}<br />
      // 新闻分类:{{ item.category }}<br />
      // 新闻来源:{{ item.author_name }}<br />
      // 新闻访问链接:{{ item.url }}<br />
      // 新闻图片链接:{{ item.thumbnail_pic_s }}<br />
      // 是否有新闻内容,1表示有 可以通过查询新闻详细内容小接口获取新闻内容:{{item.is_content}}




      