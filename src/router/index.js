import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'
import Chat from '../views/Chat.vue'
import MessageList from '../views/MessageList.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user:id',
    name: 'UserDetail',
    component: UserDetail
  },
  {
    path: '/user:id/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/message-list',
    name: 'MessageList',
    component: MessageList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
