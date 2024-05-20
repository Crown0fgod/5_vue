<template lang="">
    <input type='checkbox' :checked='checked'> {{name}}
</template>
<script>
export default {
    name : 'CheckboxItem',
    props : ['name', 'checked']
}
</script>
<style lang="">
    
</style>