<template>
    <div>
        <h1>父亲</h1>
        <p>{{message}}</p>
        <Child :message="message" :changeMsgFn="changeMessage"/>
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
        changeMessage(){
            this.message='Bye'
        }
    },
}
</script>
<style scoped>

</style>>