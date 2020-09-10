<template>
    <div>
        <h1>孩子</h1>
        <p>{{message}}</p>
        
        <p>----------</p>
        <xiao></xiao>
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