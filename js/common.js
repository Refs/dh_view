//The build will inline common dependencies into this file.

requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery': 'vendor/jquery',
    'bootstrap': 'vendor/bootstrap',
    'echarts': 'vendor/echarts',
    'view-theme': 'vendor/view-theme'
  },
  packages: [{
    name: 'BMap',
    location: './vendor/',
    main: 'bmap'
  }],
  shim: {
    'bootstrap': {　　　　　　　　
      deps: ['jquery']　　　　　　
    },
    'echarts-theme': {　　　　　　　　
      deps: ['echarts'],
    }
  }
});