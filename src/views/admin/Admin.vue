<template>
  <div class="">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-unfold" :class="{'content-collapse':collapse}">
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>
import vHeader from '@/components/admin/Header.vue'
import vSidebar from '@/components/admin/SideBar.vue'
import vPages from '@/components/admin/Pages.vue'
import bus from'@/components/admin/bus.js'
export default {
  data(){
    return{
      collapse:false
    }
  },
  created(){
      bus.$on('content-collapse',msg=>{
        this.collapse=msg
      })
  },
  components:{
    vHeader,
    vSidebar,
    vPages
  }
}
</script>

<style>
.content-unfold {
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom: 0;
    -webkit-transition: left  linear;
    transition: left  linear;
}

.content-collapse {
    left: 65px;
}
</style>