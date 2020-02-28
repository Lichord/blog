<template>
    <div>
        <el-form :model="param" :rules="rules" ref="register" label-width="0px" class="ms-content">
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
                    >
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password2">
                    <el-input
                        type="password"
                        placeholder="ensure password"
                        v-model="param.password2"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">注册</el-button>
                </div>
            </el-form>
    </div>
</template>

<script>
import bus from '@/components/user/bus.js'

export default {
    data: function() {
        var check=(rule, value, callback) => {
            if (value !== this.param.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            // 这是登录表单的数据绑定对象
            param: {
                id: '',
                nickname:'',
                password: '',
                password2:''
            },
            // 这是表单的验证规则对象
            rules: {
                // 验证用户名是否合法
                id: [
                    { required: true, message: '请输入登录账号', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                nickname:[
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                // 验证密码是否合法
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                password2:[
                    {validator:check,trigger:'blur'}
                ]
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.register.validate(async valid => {
                if(!valid)return
                const res=await this.$http.post('user/register',this.param)
                if(res.data.code!=200)return this.$message.error(res.data.message)
                this.$message.success(res.data.message)
                // 通知Login组件切换到登录组件
                bus.$emit('shift','login')
            })
        },
    },
};
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
</style>