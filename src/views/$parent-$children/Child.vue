<template>
    <div>
        <h1>孩子</h1>
        <p>{{number}}</p>
        <p>{{parentMessage}}</p>
    </div>
</template>
<script>
import Child from './Child';
export default {
    data() {
        return {
            number:10,
        }
    },
    computed:{
        parentMessage(){
            //访问到父组件中的message值
            return this.$parent.message;
        }
    }
}
</script>
<style scoped>

</style>>