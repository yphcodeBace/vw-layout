<template>
<div class="userManage">
    用户管理
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
        onSubmit(values) {
            console.log('submit', values);
        },
    }
}
</script>

<style scoped>
.userManage{
    padding: 0 40px;
}
</style>
