<template>
    <div>
        <h1>孩子</h1>
        <p>{{message}}</p>
        <button @click="handleClick">按钮</button>
    </div>
</template>
<script>
import Child from './Child';
export default {
    props:['message'], 

    methods: {
        handleClick(){
            this.$emit('changeMessage','Bay');
        }
    },
}
</script>
<style scoped>

</style>>