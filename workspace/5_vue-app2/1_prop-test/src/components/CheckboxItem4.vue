<template lang="">
   <input type='checkbox' :checked='user.checked'>{{user.number}} {{user.name}}
   <br>
</template>
<script>
import User from'../user.js';

    export default {
        name : 'CheckboxItem',
        props : {
            user : User // 타입 검사

            }
        }
</script>
<style lang="">
    
</style>