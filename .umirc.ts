import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    // configProvider
    configProvider: {},
    // themes
    dark: false,
    compact: true,
    // babel-plugin-import
    import: true,
    // less or css, default less
    style: 'less',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'Landing',
      path: '/landing',
      component: './Landing'
    }
  ],
  npmClient: 'yarn',
});

