import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import Coins from '@/components/Coins';
import ProductCatalog from '@/components/ProductCatalog';
import ManageProducts from '@/components/ManageProducts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins,
    },
    {
      path: '/catalog',
      name: 'ProductCatalog',
      component: ProductCatalog,
    },
    {
      path: '/product',
      name: 'ManageProducts',
      component: ManageProducts,
    },
  ],
});
