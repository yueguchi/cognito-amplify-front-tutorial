<template>
  <div class="apigateway-test">
    <div class="contents">
      <p>{{ status }}</p>
      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify'
import * as api from '@/libs/api/api'
export default {
  data() {
    return {
      status: '',
      message: 'empty'
    }
  },
  created() {
    Auth.currentSession()
      .then(data => {
        console.log(data)
        this.status = 'ログインしています'
      })
      .catch(err => {
        console.log(err)
        this.status = 'ログインしていません'
      })
  },
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      const { body } = await api.getTest()
      this.message = body
    }
  }
}
</script>
<style scoped>
.message {
  font-weight: bold;
  font-size: 24px;
}
</style>
