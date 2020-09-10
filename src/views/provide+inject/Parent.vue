<template>
    <div>
        <h1>父亲</h1>
        
        <Child/>
    </div>
</template>
<script>
import Child from './Child';
export default {
    components:{
        Child
    },
    //父组件提供一段值   
   provide:{
       message:"加油 坚持"
   }
}
</script>
<style scoped>

</style>>