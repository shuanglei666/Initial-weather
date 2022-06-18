<template>
    <div class="box">
        <span>节假日</span>
        <div class="content">
            <div class="ctn">
                <!-- 上 -->
                <div class="ctn_t">
                   <div class="ctn_t_t">
                    <span>{{date.date}}&nbsp;&nbsp;{{ date.week }}</span> 
                   </div>
                   <div class="ctn_t_c">
                      <span>{{date.day}}</span>
                   </div>
                   <div class="ctn_t_b">
                       <span style="marginTop:10px;"> {{date.lMonth}} 月{{date.lDate}}</span>
                       <span style="marginTop:15px;">{{ date.gzYear }}年 &nbsp;【{{date.animal}}年】</span>
                       <span style="marginTop:15px;">{{ date.gzMonth }}月  &nbsp;{{ date.gzDate }}{{ date.cnDay }} </span>
                   </div>
                </div>
                <!-- 下 -->
                <div class="ctn_b">
                    <!-- 左边 -->
                    <div class="ctn_b_l">                                                                  
                        <span class="ctn_b_l_sz">宜</span>
                        <div class="ctn_b_l_span">
                            {{ date.avoid }} 
                        </div>
                    </div>
                    <!-- 右边 -->
                    <div class="ctn_b_r">
                        <span class="ctn_b_l_sz">忌</span>
                        <div class="ctn_b_l_span">
                            {{ date.suit }} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { day } from '../../services/getata'
export default {
    data(){
        return{
            date:[]
        }
    },
    mounted(){
        this.getDay()
    },
    methods:{
        getDay(){
            day({//
                key:'111',
                date:'2022-01-31',
                detail:'1'
            })
            .then(res => {
                this.date = res.data
                console.log(res.data,'data~~~')
            }).catch(err => {
                console.log(err,11111)
            })
        }
    }
}
</script>

<style lang='scss' scoped>
    .box{
        width: 100%;
        .content{
            width: 220px;
            height: 750px;
            background-color: rgb(240, 141, 128);
            position: relative;
            top: 100px;
            left: 30%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .ctn{
                width: 90%;
                height: 90%;
                // background-color: rgb(193, 203, 233);
                display: flex;
                flex-direction: column;
                .ctn_t{
                    width: 100%;
                    height: 55%;
                    border-bottom: 1px solid #fff;
                    font-size: 18px;
                    display: flex;
                    flex-direction: column;
                    .ctn_t_t{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        span{
                            text-align: center;
                            color: #fff;
                        }
                    }
                    .ctn_t_c{
                        width: 65%;
                        height: 125px;
                        background-color: rgb(255, 187, 0);
                        margin: 10% auto;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        span{
                            font-size: 50px;
                            color: #fff;
                        }
                    }
                    .ctn_t_b{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        font-size: 17px;
                        position: relative;
                        top: 10px;
                        span{
                            color: #fff;
                           
                        }
                    }
                }
                // 下面
                 .ctn_b{
                    width: 100%;
                    height: 45%;
                    display: flex;
                    flex-direction: row;
                    // justify-content: space-around;
                    margin-top: 15%;
                    .ctn_b_l{
                        width: 50%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .ctn_b_l_sz{
                            font-size:40px;
                            color:#fff;
                            text-align:center;
                            position:relative;
                            bottom: 8%;
                        }
                        .ctn_b_l_span{
                            width: 40%;
                            height: 100%;
                            display: flex;
                            text-align: center;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            font-size: 16px;
                            color: #fff;
                            flex-wrap: wrap;
                            // background-color: violet;
                            position: relative;
                            bottom: 2.5%;
                        }
                    }
                     .ctn_b_r{
                        width: 50%;
                        height: 100%;
                         display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .ctn_b_l_sz{
                            font-size:40px;
                            color:#fff;
                            text-align:center;
							position:relative;
							bottom: 8%;
                        }
                        .ctn_b_l_span{
                            width: 70%;
                            height: 100%;
                            display: flex;
                            text-align: center;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            margin-top: -6px;
                            font-size: 13px;
                            color: #fff;
                            flex-wrap: wrap;
                            // background-color: violet;
                        }
                    }
                }
            }
        }
    }
</style>


// https://www.cnblogs.com/williamweson/p/13255552.html
// https://www.cnblogs.com/llcdxh/p/9476347.html
// 一:
// var str = {name:'斗罗',author:'唐家三少',count:'7'}
// for (var key in str) {
//   console.log(str[key], "!!!");
// } 
// // 值: 斗罗 !!!  唐家三少 !!!  7 !!!

// var str = [
//   {
//     name:'唐三',age:'12'
//   },
//   {
//     name:'小舞',age:'9'
//   },
//   {
//     name:'安安',age:'23'
//   }
// ]


// 二:
// var arr = ['斗罗','唐家三少','7'];
// for (var key in arr) {
//   console.log(str[key], "!!!");
// } 
// console.log(arr,'arr~~~');
// 值: 斗罗 !!!  唐家三少 !!!  7 !!!
