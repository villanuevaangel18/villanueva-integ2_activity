import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/guest/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/guest/RegisterView.vue')
    },
    {
      path: '/',
      component: () => import('@/layouts/Applayout.vue'), // layout with header, sidebar, rightsidebar
      children: [
        {
          path: '',
          redirect: '/feed'
        },
        {
          path: 'feed',
          name: 'feed',
          component: () => import('@/views/authenticated/FeedView.vue')
        },
        {
          path: 'communities',
          name: 'communities',
          component: () => import('@/views/authenticated/CommunitiesView.vue')
        },
        {
          path: 'chats',
          name: 'chats',
          component: () => import('@/views/authenticated/ChatView.vue')
        },
        {
          path: 'assignments',
          name: 'assignments',
          component: () => import('@/views/authenticated/AssignmentView.vue')
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('@/views/authenticated/EventsView.vue')
        }
      ]
    }
  ]
})

export default router
