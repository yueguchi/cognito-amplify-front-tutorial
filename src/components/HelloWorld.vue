<template>
  <div class="page">
    <div class="login-form">
      <p>ログイン</p>
      <p>{{ status }}</p>
      <p>{{ message_text }} </p>
      <ul class="login-form">
        <li>
          <label>ユーザー名</label>
          <input
            v-model="userInfo.username"
            type="text">
        </li>
        <li>
          <label>パスワード</label>
          <input
            v-model="userInfo.password"
            type="password">
        </li>
      </ul>
      <button
        class="btn btn-primary"
        @click="signIn">ログイン</button>
      <button
        class="btn btn-primary"
        @click="signOut">ログアウト</button>
      <img :src="url">
      <br>
      <router-link :to="{ name: 'ApiGatewayTest'}">APIGateway連携テスト</router-link>
    </div>
  </div>
</template>
<script>
import Amplify, { Auth } from 'aws-amplify'
const awsExports = require('@/aws-exports').default

Amplify.configure(awsExports)
export default {
  data() {
    return {
      status: '',
      userInfo: {
        username: '',
        password: ''
      },
      message_text: '',
      url: ''
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
    console.log(this.userInfo)
  },
  methods: {
    signUp() {
      Auth.signUp(this.userInfo.username, this.userInfo.password)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },
    signIn() {
      console.log(this.userInfo)
      Auth.signIn(this.userInfo.username, this.userInfo.password)
        .then(data => {
          this.message_text = 'ログインしました'
          this.status = 'こんにちは、' + data.username + 'さん'
        })
        .catch(err => {
          console.log(err)
          this.message_text = 'ログインできませんでした'
        })
    },
    signOut() {
      Auth.signOut()
        .then(data => {
          console.log(data)
          this.message_text = 'ログアウトしました'
        })
        .catch(err => {
          console.log(err)
          this.message_text = 'ログアウトできませんでした'
        })
    }
  }
}
</script>
<style scoped>
.login-form {
  list-style: none;
}
</style>
