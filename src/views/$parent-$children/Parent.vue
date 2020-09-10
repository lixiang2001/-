<template>
    <div>
        <h1>父亲</h1>
        <p>{{message}}</p>
        <button @click="changeChildNumber">按钮</button>
        <Child/>
    </div>
</template>
<script>
import Child from './Child';
export default {
    data() {
        return {
            message:"hello 加油"     
        }
    },
    components:{
        Child
    },
    methods: {
        changeChildNumber(){
          this.$children[0].number = 50;
        }
    },
}
</script>
<style scoped>

</style>>