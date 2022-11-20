import { defineConfig } from 'dumi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  title: 'XRender',
  favicons: [
    'https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png',
  ],
  outputPath: 'docs-dist',
  mfsu: false,
  hash: false,
  // dynamicImport: {
  //   loading: '@/docs/Loading.js',
  // },
  locales: [{ id: 'zh-CN', name: '中文' }],
  ignoreMomentLocale: false,
  themeConfig: {
    logo: 'https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png',
    navs: [
      {
        title: 'FormRender',
        path: '/form-render',
      },
      {
        title: 'TableRender',
        path: '/table-render',
      },
      {
        title: 'ChartRender',
        path: '/chart-render',
      },
      { title: '表单设计器', path: '/generator' },
      {
        title: 'Playground',
        path: '/playground',
      },
      {
        title: '常见问题',
        path: '/faq',
      },
      {
        title: '周边工具',
        path: '/tools',
        children: [
          { title: 'PropToSchema', path: '/tools/proptypes' },
          { title: 'VSCode 插件', path: '/tools/vscode' },
          {
            title: '旧版文档',
            path: 'https://x-components.gitee.io/form-render/',
          },
        ],
      },
      {
        title: '更新日志',
        children: [
          {
            title: 'FormRender',
            link: 'https://github.com/alibaba/x-render/blob/master/packages/form-render/CHANGELOG.md',
          },
          {
            title: 'TableRender',
            link: 'https://github.com/alibaba/x-render/blob/master/packages/table-render/CHANGELOG.md',
          },
          {
            title: 'ChartRender',
            link: 'https://github.com/alibaba/x-render/blob/master/packages/chart-render/CHANGELOG.md',
          },
        ],
      },

      { title: 'GitHub', link: 'https://github.com/alibaba/x-render' },
    ],
    footer: 'Please feel free to use and contribute to the development.',
  },
  // base: '/x-render/',
  // publicPath: '/x-render/',
  exportStatic: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@alifd/next',
        libraryDirectory: 'lib',
      },
      '@alifd/next',
    ],
  ],
  // runtimePublicPath: true,
  chainWebpack(config, { webpack }) {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin);
  },
  plugins: [require.resolve('./scripts/dumi-plugin/redirect')],
  // more config: https://d.umijs.org/config
});
