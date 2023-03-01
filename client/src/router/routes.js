
import authors from './modules/authors'
import posts from './modules/posts'
import about from './modules/about'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/HomePage.vue'),
        name: 'Root',
      },

      ...authors,
      ...posts,
      ...about
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/errors-page/ErrorNotFound.vue')
  }
]

export default routes
