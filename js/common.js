//The build will inline common dependencies into this file.

requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery': 'vendor/jquery',
    'bootstrap': 'vendor/bootstrap',
    'echarts': 'vendor/echarts',
    'bmap': 'vendor/bmap',
    'view-theme': 'vendor/view-theme'
  },
  shim: {
    'bootstrap': {　　　　　　　　
      deps: ['jquery']　　　　　　
    },
    'bmap': {　　　　　　　　
      deps: ['echarts'],
　　　 exports: 'BMapExtension'　　　　　　
    },
    'echarts-theme': {　　　　　　　　
      deps: ['echarts'],
    }
  }
});