import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: DashboardLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: "Home"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/Home.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: { title: "User"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/User.vue')
      },
      {
        path: '/userManagement',
        name: 'user_management',
        meta: { title: "User Management"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/UserManagement.vue')
      },
      {
        path: '/komunitas',
        name: 'komunitas',
        meta: { title: "Komunitas"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/Community.vue')
      },
      {
        path: '/post',
        name: 'post',
        meta: { title: "Posting"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/Post.vue')
      },
      {
        path: '/interest',
        name: 'interest',
        meta: { title: "Interest"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/Interest.vue')
      },
      {
        path: '/produk',
        name: 'produk',
        meta: { title: "Produk"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/Product.vue')
      },
      {
        path: '/kategori',
        name: 'kategori',
        meta: { title: "Kategori"},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/Category.vue')
      },

    


      // detail
      {
        path: '/user/detail/1',
        name: 'user_detail',
        meta: { title: "Detail User"},
        component: () => import('../otto/layout/detail/UserDetail.vue')
      },

      {
        path: '/userManagement/detail/1',
        name: 'user_management_detail',
        meta: { title: "User Management Detail"},
        component: () => import('../otto/layout/detail/UserManagementDetail.vue')
      },

      {
        path: '/community/detail/1',
        name: 'community_detail',
        meta: { title: "Detail Komunitas"},
        component: () => import('../otto/layout/detail/CommunityDetail.vue')
      },

      {
        path: '/post/detail/1',
        name: 'posting_detail',
        meta: { title: "Detail Posting"},
        component: () => import('../otto/layout/detail/PostingDetail.vue')
      },
      {
        path: '/produk/detail/1',
        name: 'product_detail',
        meta: { title: "Detail Produk"},
        component: () => import('../otto/layout/detail/ProductDetail.vue')
      },
      {
        path: '/kategori/detail/1',
        name: 'category_detail',
        meta: { title: "Detail Kategori"},
        component: () => import('../otto/layout/detail/CategoryDetail.vue')
      },

      {
        path: '/interest/detail/1',
        name: 'interest_detail',
        meta: { title: "Detail Interest"},
        component: () => import('../otto/layout/detail/InterestDetail.vue')
      },


      //add
      {
        path: '/community/add',
        name: 'community_add',
        meta: { title: "Tambah Komunitas"},
        component: () => import('../otto/layout/edit/CommunityAdd.vue')
      },


      // edit
      {
        path: '/user/edit/1',
        name: 'user_edit',
        meta: { title: "Edit User"},
        component: () => import('../otto/layout/edit/UserEdit.vue')
      },

      {
        path: '/community/edit/1',
        name: 'community_edit',
        meta: { title: "Edit Komunitas"},
        component: () => import('../otto/layout/edit/CommunityEdit.vue')
      },

      {
        path: '/post/edit/1',
        name: 'posting_edit',
        meta: { title: "Edit Post"},
        component: () => import('../otto/layout/edit/PostEdit.vue')
      },

      {
        path: '/interest/edit/1',
        name: 'interest_edit',
        meta: { title: "Edit Interest"},
        component: () => import('../otto/layout/edit/InterestEdit.vue')
      },
      {
        path: '/produk/edit/1',
        name: 'product_edit',
        meta: { title: "Edit Product"},
        component: () => import('../otto/layout/edit/ProductEdit.vue')
      },
      {
        path: '/kategori/edit/1',
        name: 'category_edit',
        meta: { title: "Edit Kategori"},
        component: () => import('../otto/layout/edit/CategoryEdit.vue')
      },

      {
        path: '/userManagement/edit/1',
        name: 'user_management_edit',
        meta: { title: "Edit User Management"},
        component: () => import('../otto/layout/edit/UserManagementEdit.vue')
      },


      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../otto/layout/main/Login.vue')
      },
      
      
      
      
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
