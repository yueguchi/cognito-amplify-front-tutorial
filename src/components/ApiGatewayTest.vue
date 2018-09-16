<template>
  <div class="apigateway-test">
    <div class="contents">
      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>
<script>
import * as api from '@/libs/api/api'
export default {
  data() {
    return {
      message: 'empty'
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      const { data: { body } } = await api.getTest()
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
