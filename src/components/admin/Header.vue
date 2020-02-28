<template>
  <div class="header">
    <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="collapseChange">
          <i v-if="!collapse" class="el-icon-s-fold"></i>
          <i v-else class="el-icon-s-unfold"></i>
      </div>
      <div class="name">博客后台管理系统</div>
      <div class="header-right">
        <div class="header-right-full">
          <!-- 全屏显示 -->
            <div class="btn-fullscreen" @click="handleFullScreen">
                <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                    <i class="el-icon-rank"></i>
                </el-tooltip>
            </div>
            <div class="exit" @click="logout">退出登录</div>            
        </div>
      </div>   
  </div>
</template>

<script>
import bus from '@/components/admin/bus.js'
export default {
  data(){
    return{
      collapse:flase,
    }
  },
  methods:{
    //侧边栏折叠
    collapseChange(){
      // 修改折叠状态
      this.collapse=!this.collapse;
      // 触发collapse事件,并将状态参数传过去
      bus.$emit('collapse',this.collapse);
    },
    // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        logout(){
          // 清空token
          window.sessionStorage.clear()
          this.$router.push('/login')
        }
  }
}
</script>

<style>
.header{
  height:70px;
  width:100%;
  font-size: 25px;
  background-color:#61bfbe;
  color:white;
}
.collapse-btn{
    float:left;
    padding:20px 20px;
    cursor:pointer;
  }
.name{
  float:left;
  padding:20px 0;
}
.header-right{
  float:right;
  font-size: 15px;
}

.header-right-full {
    display: flex;
    align-items: center;
    padding:20px 50px;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.exit{
  cursor:pointer;
}
</style>