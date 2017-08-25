<template>
    <div class="el-home">
       <ul>
           <li>
               <router-link :to="{ name: 'item', params: { id: 'item01' }}">
                   item01
               </router-link>
               <router-link :to="{ name: 'item', params: { id: 'item02' }}">
                   item02
               </router-link>
               <router-link :to="{ name: 'item', params: { id: 'item03' }}">
                   item03
               </router-link>
               <router-link :to="{ name: 'item', params: { id: 'item04' }}">
                   item04
               </router-link>
           </li>

       </ul>
    </div>
</template>

<style scoped lang="scss">
    .el-home{
        font-size: 14px;
    }
</style>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                message:'你好啊'
            }
        }
    }
</script>