export default [
  { 
    path: '/categories',
    name: 'CategoriesList',
    component: () => import('../../pages/categories/CategoriesList.vue') 
  },
  {
    path: '/categories/new',
    name: 'CategoriesCreate',
    component: () => import('../../pages/categories/CategoriesForm.vue')
  },
  {
    path: '/categories/:id/edit',
    name: 'CategoriesEdit',
    component: () => import('../../pages/categories/CategoriesForm.vue')
  }
]
