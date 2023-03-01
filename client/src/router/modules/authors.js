export default [
  { 
    path: '/authors',
    name: 'AuthorsList',
    component: () => import('../../pages/authors/AuthorsList.vue') 
  },
  {
    path: '/authors/new',
    name: 'AuthorsCreate',
    component: () => import('../../pages/authors/AuthorsForm.vue')
  },
  {
    path: '/authors/:id/edit',
    name: 'AuthorsEdit',
    component: () => import('../../pages/authors/AuthorsForm.vue')
  }
]
