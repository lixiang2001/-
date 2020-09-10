<template>
    <div>
        <h1>父亲</h1>
        <p>姓名：{{name}}</p>
        <p>年龄：{{age}}</p>
        <Child :name="name" :age="age" @changeName="changeName"/>
    </div>
</template>
<script>
import Child from './Child';
export default {
    data() {
        return {
            name:"哈默",
            age:'20'
        }
    },
    components:{
        Child
    },
    //父组件提供一段值   
   provide:{
       message:"加油 坚持"
   },
   methods: {
       changeName(){
           this.name = "小夏";
       }
   },
}
</script>
<style scoped>

</style>>