<template>
<div class="login">
  <div class="title">登 录</div>
    <van-form @submit="onSubmit">
    <div class="input input1">
        <van-icon name="contact" />
        <van-field
            v-model="username"
            name="用户名"
            placeholder="请输入用户名"
        />
    </div>
    <div class="input">
        <van-icon name="closed-eye" />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="请输入密码"
        />
    </div>
    <div class="btn" style="margin: 50px 0 16px;">
        <van-button @click="clickLogin" round block type="info" native-type="submit">
        登 录
        </van-button>
    </div>
    <div class="wjmm">
        <span>忘记密码？</span>
        <span>请联系管理人员</span>
    </div>
    </van-form>
</div>
</template>

<script>
import { Form, Field, Button, Icon } from 'vant';
export default {
    components: {
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button,
        [Icon.name]: Icon,
    },
    name: "Login",
    data() {
        return {
            username: '',
            password: '',
        };
    },
    //页面加载调用获取cookie值
    mounted() {},
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        clickLogin(){
            this.$router.push('/userManage');
        }
    }
}
</script>

<style scoped>
.login{
    padding: 0 40px;
}
.title {
  width: 100%;
  margin: 200px 0;
  font-size: 30px;
  font-weight: bold;
  color: grey;
}
.input{
    display: flex;
    align-items: center;
    border-bottom: 1px solid gainsboro;
}
.input1{
    margin-bottom: 50px;
}
.van-button{
    height: 80px;
    font-size: 30px;
}
.wjmm{
    margin-top: 50px;
}
.wjmm span{
    font-size: 20px;
    font-weight: bold;
}
.wjmm span:first-child{
    color: #06C1FA;
    cursor: pointer;
}
.wjmm span:last-child{
    color: grey;
}
</style>
