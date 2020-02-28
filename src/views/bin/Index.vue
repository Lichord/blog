<template>
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="@/assets/logo.jpg" alt="">
      </div>
      <!-- 路由 -->
      <div  class="router">
        <router-link to="/login">
          <div class="head">登录</div>         
        </router-link>         
        <div class="head">·</div>
        <router-link to="/register">
          <div  class="head">注册</div>
        </router-link>          
      </div>
      <!-- 表单渲染 -->
      <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// 登录框
.login_box {
  width: 400px;
  height: 400px;
  background-color:#61bfbe;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
// logo
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.router {
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 25%;
  width:100%;
  padding:0 40px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
}

.head{
  font-size:30px;
  padding: 20px;
  display:inline-block;
}

a{
  color: lightcoral;
}
</style>
