<script>
import axios from 'axios'
export default {
  data () {
    return {
      account: '',
      pwd: ''
    }
  },
  methods: {
    regidit () {
      axios.post('')
    }
  }
}
</script>

<template>
  <div>
    <label for="">
      <input type="text" v-model="account">用户名：
    </label>
    <label for="">
      <input type="password" v-model="pwd">密码：
    </label>
    <button>注册</button>
  </div>
</template>
