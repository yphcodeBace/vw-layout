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
            <div class="zhiwei"><span>技术部</span> | <span>前端开发</span></div>
        </div>
        <div class="icon"><van-icon name="comment-o" /></div>
    </div>
    <div class="content">
        <div class="title">~ 优先任务 ~</div>
        <div class="t-box">
            <van-cell><van-icon class="v-middle" name="location-o" />巡检任务<span class="infoTz">36</span></van-cell>
            <van-cell class="daiban"><van-icon class="v-middle" name="like-o" />维保任务<span class="infoTz">16</span></van-cell>
        </div>
        <van-cell is-link>
            <van-icon class="v-middle" name="star-o" />
            待办事项
            <span class="infoTz">35</span>
        </van-cell>
        <van-cell is-link><van-icon class="v-middle" name="fire-o" />历史记录<span class="infoTz">6</span></van-cell>
        <van-cell is-link><van-icon class="v-middle" name="gem-o" />任务抽查<span class="infoTz">16</span></van-cell>
        <van-cell is-link><van-icon class="v-middle" name="underway-o" />清除缓存<span class="LJ">0MB</span></van-cell>
        <van-cell is-link @click="showPopup"><van-icon class="v-middle" name="setting-o" />账号设置</van-cell>
        <div class="info">管理人员电话：17625931789</div>
        <div class="info">正常工作时间：9:00 - 18:00</div>
    </div>
    <!-- 弹出层 -->
    <van-popup class="popup" v-model="show" position="bottom" :style="{ height: '40%' }">
        <van-cell>账号设置</van-cell>
        <van-cell @click="editPass" class="operInfo">修改密码</van-cell>
        <van-cell class="operInfo" @click="logOut">退出登录</van-cell>
        <van-button @click="cancel" round type="info">退出</van-button>
    </van-popup>
    <!-- 修改密码弹出层 -->
    <van-popup class="popup2" v-model="show2" position="bottom" :style="{ height: '40%' }">
        <van-cell class="editPass">修改密码</van-cell>
        <van-form @submit="onSubmit" :key="reset">
        <van-field
            v-model="ysPassword"
            type="password"
            name="ysPassword"
            label="原始密码："
            placeholder="原始密码"
        />
        <van-field
            v-model="password"
            type="password"
            name="passWord"
            label="最近密码："
            placeholder="最近密码"
        />
        <van-field
            v-model="conPassword"
            type="password"
            name="conPassWord"
            label="确认密码："
            placeholder="确认密码"
        />
        <div style="margin: 16px;">
            <van-button round type="info" native-type="submit">
            提交
            </van-button>
        </div>
        </van-form>
    </van-popup>
</div>
</template>

<script>
import { NavBar, Icon, Cell, Sidebar, Popup, Button, Form, Field } from 'vant';
export default {
    components: {
        [NavBar.name]: NavBar,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [Sidebar.name]: Sidebar,
        [Popup.name]: Popup,
        [Button.name]: Button,
        [Form.name]: Form,
        [Field.name]: Field,
    },
    name: "userManage",
    data() {
        return {
            ysPassword: '',
            password: '',
            conPassword: '',
            show: false,
            show2: false,
            reset: false,
        };
    },
    //页面加载调用获取cookie值
    mounted() {},
    methods: {
        onClickLeft() {
            console.log('返回');
        },
        showPopup() {
            this.show = true;
        },
        logOut() {
            this.$router.push('/Login');
        },
        cancel() {
            this.show = false;
        },
        editPass() {
            this.show2 = true;
        },
        onSubmit(values) {
            console.log('submit', values);
            this.show2 = false;
            this.ysPassword = '';
            this.password = '';
            this.conPassword = '';
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
.popup, .popup2{
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}
.popup .van-cell{
    height: 120px;
    line-height: 120px;
    border-bottom: 1px solid #F2F2F2;
    padding: 0 30px;
    font-size: 30px;
}
.popup .van-cell__value--alone{
    text-align: center;
}
.popup .van-button--normal{
    height: 60px;
    margin-top: 60px;
    padding: 0px 50px;
}
.popup2 .van-button--normal{
    height: 60px;
    margin-top: 10px;
    padding: 0px 50px;
}
.operInfo .van-cell__value{
    color: #B5B5B5;
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
    padding-left: 50px !important;
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
.infoTz{
    float: right;
    padding: 0 10px;
    margin-right: 20px;
    line-height: 40px;
    /* text-align: center; */
    height: 40px;
    color: white;
    background: red;
    border-radius: 45%;
    margin-top: 30px;
    font-size: 24px;
}
.LJ{
    float: right;
    /* margin-top: 30px; */
    margin-right: 20px;
}
.v-middle{
    vertical-align: middle;
    margin-right: 10px;
}
/* 修改密码 */
.editPass .van-cell__value{
    text-align: center;
    font-size: 30px;
}
.popup2 .van-cell{
    /* border: 1px solid red; */
    height: 100px;
    line-height: 100px;
}
.popup2 .van-cell >>> .van-field__label{
    /* border: 1px solid red; */
    width: 180px;
    font-size: 30px;
    text-align: right;
}
</style>
