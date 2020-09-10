<template>
    <div>
        <h1>最小</h1>
        <p>{{message}}</p>
        <p>这就是隔代传递数据</p>
    </div>
</template>
<script>
import Child from './Child';
export default {
    //将值父元素提供的值 注入并使用
  inject:['message'],
}
</script>
<style scoped>

</style>>