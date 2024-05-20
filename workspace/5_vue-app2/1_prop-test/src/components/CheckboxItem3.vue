<template lang="">
    <input type='checkbox' :checked='checked'> {{name}}
</template>
<script>
export default {
    name : 'CheckboxItem',
    props : {
        number : [Number, String], 
        name : String,
        checked : {
            type : Boolean,
            required : true
        }
    }
}
</script>
<style lang="">
    
</style>