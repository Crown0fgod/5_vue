<template lang="">
  <h1>유저 정보 조회</h1>
  <ul>
    <CheckboxItem v-for='user in users' :key='user.id'
    :number='user.number' :name='user.name' :checked='user.checked'/>
  </ul>
</template>
<script>
import CheckboxItem from './components/CheckboxItem.vue';

export default {
    name : 'App',
    components : {CheckboxItem},

    data() {
      return {
        users : [
          {number : 1, name:'김진수', checked : true},
          {number : 2, name:'홍길동'},
          {number : 3, name:'이순신'},
          {number : 4, name:'강감찬', checked : true}
        ]
      }
    },
}
</script>
<style lang="">
  
</style>