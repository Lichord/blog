<template>
  <div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="id">
                    <el-input v-model="param.id" placeholder="userid">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">{{loginMessage}}</el-button>
                </div>
            </el-form>
  </div>
</template>

<script>
export default {
        data: function() {
        return {
            loginMessage:'登录',
            // 这是登录表单的数据绑定对象
            param: {
                id: 'admin',
                password: '123456',
            },
            // 这是表单的验证规则对象
            rules: {
                // 验证用户名是否合法
                id: [
                    { required: true, message: '请输入登录账号', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                // 验证密码是否合法
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }]
            },
        };
    },
    methods: {
        // 提交登录表单
        submitForm() {
            this.loginMessage='登录中...'     
             //参数valid是表单预验证的结果，是一个布尔值,验证通过为true
            //  通过this.$refs拿到表单的引用            
            this.$refs.login.validate(async valid => {
                if (!valid) return
                // 请求之前现在main.js中配置axios
                // this.$http.post('user/login', this.param)返回值是一个Promise,可以用async和await关键字简化代码
                const res=await this.$http.post('user/login',this.param)
                console.log(res.data.message)
                if(res.data.code!=200) return this.$message.error(res.data.message)
                this.$message.success(res.data.message)
                const json=eval("("+res.data.data+")");
                console.log(json.token)
                window.sessionStorage.setItem('token', json.token)
                // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
                if( json.type=="1")
                this.$router.push('/admin')
                else this.$router.push('/home')
            }),
            this.loginMessage='登录'
        },
    },
}
</script>

<style>
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
}
/* .wait{
    disabl
} */
</style>