import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ApiGatewayTest from '@/components/ApiGatewayTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/apigateway-test',
      name: 'ApiGatewayTest',
      component: ApiGatewayTest
    }
  ]
})
