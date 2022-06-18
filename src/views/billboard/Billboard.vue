<template>
  <div class="box">
    <div class="content">
      <a class="list" :href="item.share_url" v-for="(item,index) in date" :key="index">
        <div class="lft">
          <div class="lgt_img">
            <img :src="item.item_cover" alt="">
          </div>
        </div>
        <div class="rgt">
          <div class="rgt_l">
            <span
              >标题:{{item.title}} </span>
          </div>
          <div class="rgt_l">作者:{{item.author}}</div>
          <div class="rgt_l">视频热词: {{item.hot_words}} </div>
          <div class="rgt_l">播放数: {{item.play_count}}<span style="marginLeft:50px;">热度指数: {{item.hot_value}}</span></div>
          <div class="rgt_l">评论数: {{item.comment_count}}<span style="marginLeft:90px;">点赞数: {{item.digg_count}}</span></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

import { billboard } from "../../services/getata";
export default {
  data() {
    return {
      date: [],
    };
  },
  mounted() {
    //
    this.getBillboard();
  },
  methods: {
    getBillboard() {
      billboard({
        key: "", // 
        type: "hot_video",
      }).then((res) => {
        this.date = res.data;
        // this.srcul = res.data[0].share_url;
        // this.$nextTick(() => {
        //   this.shaed = true;
        // });
        console.log(this.playerOptions, 1);
        console.log(res.data, "~~~");
        console.log(res.data.author,'author~~~')
      });
    },
  },
};
</script>


<style  lang='scss' scoped>
.box {
  width: 100%;
  height: 1000px;
  // background: #f3f4f7;
  .content {
    width: 35%;
    margin: 0 auto;
    .list {
      width: 100%;
      height: 400px;
      background-color: blanchedalmond;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #fff;
      margin-top: 2%;
      text-decoration:none;
      color: #000;
      .lft {
        width: 40%;
        height: 100%;
        background-color: aliceblue;
        // border-right: 1px solid #000;
        .lgt_img{
          width: 80%;
          height: 80%;
          img{
            width: 100%;
            height: 100%;
            position: relative;
            top: 30px;
            left: 13%;
          }
        }
      }
      .rgt {
        width: 60%;
        height: 100%;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        .rgt_l {
          width: 100%;
          height: 20%;
          // border-bottom: 1px solid #000;
          display: flex;
          flex-direction: row;
          // justify-content: center;
          align-items: center;
          font-size: 16px;
        }
      }
    }
  }
}
</style>

<!-- res.data.forEach((item) => {
                    this.typeIdList.push({
                        remark: item.remark
                    });
                }); -->