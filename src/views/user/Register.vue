<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">博客系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="id">
                    <el-input v-model="param.id" placeholder="userid">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="nickname">
                    <el-input v-model="param.nickname" placeholder="nickname">
                        <el-button slot="prepend" icon="el-icon-user-solid"></el-button>
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
                    <el-button type="primary" @click="submitForm()">注册</el-button>
                </div>
            </el-form>
            <div class="login" @click="goLogin()">去登录</div>            
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // 这是登录表单的数据绑定对象
            param: {
                id: '',
                nickname:'',
                password: '',
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
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success('登录成功');
                    localStorage.setItem('ms_username', this.param.username);
                    this.$router.push('/');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        goLogin(){
            this.$router.push('/login')
        }
    },
};
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
.login{
    font-size: 14px;
    float:right;
    color:#fff;
    margin-top:-10px;
    margin-bottom: 20px;
    margin-right:30px;
    cursor:pointer;
}
</style>