<template>
  <div class="box">
    <div class="content">
      <a :href="item.url" class="column" v-for="(item,index) in list" :key="index">
        <div class="ctn">
          <div class="ctn_img">
              <img :src="item.thumbnail_pic_s" alt="没有找到">
          </div>
          <div class="ctn_rgt">
            <div class="ctn_rgt_t">
              {{item.title}}
            </div>
            <div class="ctn_rgt_b">
              <div class="ctn_rgt_b_l">{{item.date}}</div>
              <div class="ctn_rgt_b_l">{{item.author_name}}</div>
              <div class="ctn_rgt_b_l">{{item.category}}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
// import { headLines } from '../../services/getata'
export default {
  data(){
    return {
      list:[]
    }
  },
  created(){
    this.getHeadLines();
  },
  methods:{
    getHeadLines(){
      headLines({
        key:'db777c5f3b6d9bbb1f150d1ea201e686',   //db777c5f3b6d9bbb1f150d1ea201e686
      })
      .then(res => {
        this.list = res.data
        console.log(res.data,'data~~~')
      })
    }
  }
}
</script>

<script>
import { headLines } from "../../services/getata";
export default {
  data() {
    return {
      list:[],
    };
  },
  mounted() {
    this.getHeadLines();
  },
  methods: {
    getHeadLines() {
      headLines({
        key:'11'         //  
      }).then((res) => {
        this.list = res.data;
        console.log(res.data, "data123123");
      }).catch(err => {
        console.log(err,'报错了')
      })
    },
  },
};
</script>
<style lang='scss' scoped>
.box {
  width: 100%;
  .content {
    width: 50%;
    background-color: snow;
    margin: 0 auto;
    .column{
      width: 100%;
      height: 200px;
      border-bottom: 1px solid rgb(51, 160, 211);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ctn{
        width: 95%;
        height: 80%;
        background-color: burlywood;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // 左边
        .ctn_img{
          width: 20%;
          height: 100%;
          border-right: 1px solid #000;
          img{
            width: 100%;
            height: 100%;
          }
        }
        // 右边
        .ctn_rgt{
          width: 75%;
          height: 100%;
          background-color: skyblue;
          .ctn_rgt_t{
            width: 100%;
            height: 80%;
            background-color: rgb(235, 201, 161);
            font-size: 20px;
            font-weight: 600;
            color: #000;
          }
          .ctn_rgt_b{
            width: 100%;
            height: 20%;
            color: #ccc;
            background-color: rgb(245, 230, 212);
            display: flex;
            flex-direction: row;
            .ctn_rgt_b_l{
              flex: 1;
              border-right: 1px solid #ccc;
            }
          }
        }
      }
    }
  }
}
</style>