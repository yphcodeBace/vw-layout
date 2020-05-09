<template>
<div class="userManage">
    <!-- <van-nav-bar
        title="用户管理"
        left-arrow
        @click-left="onClickLeft"
    /> -->
    <div class="top">
        <div><van-icon name="user-o" /></div>
        <div>
            <div class="username">燕培浩</div>
            <div class="zhiwei"><span>技术部</span> | <span>负责人</span></div>
        </div>
        <div class="icon"><van-icon name="comment-o" /></div>
    </div>
    <div class="content">
        <div class="title">~ 优先任务 ~</div>
        <div class="t-box">
            <van-cell>巡检任务</van-cell>
            <van-cell class="daiban">维保任务</van-cell>
        </div>
        <van-cell is-link>待办事项</van-cell>
        <van-cell is-link>历史记录</van-cell>
        <van-cell is-link>任务抽查</van-cell>
        <van-cell is-link>清除缓存</van-cell>
        <van-cell is-link>账号设置</van-cell>
        <div class="info">管理人员电话：17625931789</div>
        <div class="info">正常工作时间：9:00 - 18:00</div>
    </div>
</div>
</template>

<script>
import { NavBar, Icon, Cell } from 'vant';
export default {
    components: {
        [NavBar.name]: NavBar,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
    },
    name: "userManage",
    data() {
        return {
            username: '',
            password: '',
        };
    },
    //页面加载调用获取cookie值
    mounted() {},
    methods: {
        onClickLeft() {
            console.log('返回');
        },
    }
}
</script>

<style scoped>
.userManage{
    padding: 0;
    position: relative;
}
.top{
    height: 400px;
    background: #666666;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 0 5%;
}
.top > div{
    float: left;
    /* border: 1px solid red; */
    height: 180px;
    margin-top: 110px;
    box-sizing: border-box;
}
.top > div:first-child{
    width: 180px;
    line-height: 180px;
    font-size: 100px;
    border-radius: 50%;
    background: #FFF;
    color: grey;
}
.top > div:nth-child(2){
    width: 380px;
    text-align: left;
    padding-left: 20px;
    padding-top: 30px;
}
.top > div:last-child{
    width: 100px;
}
.content{
    /* border: 1px solid red; */
    height: 900px;
    width: 90%;
    position: absolute;
    top: 360px;
    left: 5%;
    background: #FFF;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
}
.username{
    font-weight: bold;
    font-size: 30px;
    color: #FFF;
    margin-bottom: 20px;
}
.zhiwei{
    color:#C6C6C6;
    font-size: 30px;
}
.icon{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.icon .van-icon{
    color: #FFF;
    font-size: 50px;
}
/* 内容 */
.title{
    color: #A8A8A8;
    margin: 20px;
    font-size: 30px;
}
.content{
    margin-bottom: 60px;
}
.content .van-cell{
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #F2F2F2;
    padding: 0 30px;
    font-size: 30px;
}
.content .van-cell__left-icon, .van-cell__right-icon{
    height: 100px;
    line-height: 100px;
    font-size: 30px;
}
.t-box{
    display: flex;
    flex-direction: row;
}
.t-box .van-cell{
    /* border: 1px solid red; */
}
.daiban{
    position: relative;
    padding-left: 100px !important;
    /* border: 1px solid green; */
}
.daiban::after{
    position: absolute;
    content: "";
    width: 2px;
    height: 40px;
    background: #A8A8A8;
    top: 30px;
    left: 0;
}
.info{
    margin: 30px 0;
    color: #A8A8A8;
    font-size: 30px;
}
</style>
