export default [
  { 
    path: '/posts',
    name: 'PostsList',
    component: () => import('../../pages/posts/PostsList.vue') 
  },
  {
    path: '/posts/new',
    name: 'PostsCreate',
    component: () => import('../../pages/posts/PostsForm.vue')
  },
  {
    path: '/posts/:id/edit',
    name: 'PostsEdit',
    component: () => import('../../pages/posts/PostsForm.vue')
  }
]
