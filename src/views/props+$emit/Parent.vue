<template>
    <div>
        <h1>父亲</h1>
        <p>{{message}}</p>
        <Child :message="message" @changeMessage="message=$event"/>
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
    }
}
</script>
<style scoped>

</style>>