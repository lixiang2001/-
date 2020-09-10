<template>
    <div>
        <h1>孩子</h1>
        <p>{{message}}</p>
        
        <p>----------</p>
        <button @click="$listeners.changeName">按钮</button>
        <xiao v-bind="$attrs"></xiao>
        <!-- 这应该就是将值往下传入了 -->
        
    </div>
</template>
<script>
import xiao from './xiao';
export default {
    //将值父元素提供的值 注入并使用
  inject:['message'],
  components:{
      xiao
  }
}
</script>
<style scoped>

</style>>