<template>
    <div>
        <h1>父亲</h1>
        <button @click="chageName">按钮</button>
        <Child ref="childComp"/>
    </div>
</template>
<script>
import Child from './Child';
export default {
    
    components:{
        Child
    },
    methods: {
        chageName(){
            console.log('点击前',this.$refs.childComp.age);
            this.$refs.childComp.changeAge();
            console.log('点击后',this.$refs.childComp.age);
        }
    },
}
</script>
<style scoped>

</style>>