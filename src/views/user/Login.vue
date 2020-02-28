<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">
                <div class="switch" @click.prevent="name='login'" >登录</div>·           
                <div class="switch" @click.prevent="name='register'" >注册</div> 
            </div>             
            <component :is="name"></component>           
        </div> 
    </div>  
</template>

<script>
import Login from '@/components/user/Login.vue'
import Register from '@/components/user/Register.vue'
import bus from '@/components/user/bus.js'
export default {
    data:function(){
        return{
            name:'login'
        }
    },
    components:{
        login:Login,
        register:Register
    },
    created: function() {
        // 监听事件
        bus.$on('shift', (val) => {
          this.name=val;
          console.log(val)
        })      }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.switch{
    font-size: 20px;
    text-align: center;
    color:#fff;
    cursor:pointer;
    display: inline;
    margin:0 30px;
}
.switch:hover{
    color:#555;
}
</style>