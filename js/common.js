//The build will inline common dependencies into this file.

requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery': 'vendor/jquery',
    'bootstrap': 'vendor/bootstrap',
    'echarts': 'vendor/echarts',
    'view-theme': 'vendor/view-theme',
    'screenfull':'vendor/screenfull'

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
    'screenfull': {　　　　　　　　
      deps: ['jquery']　　　　　　
    },
    'echarts-theme': {　　　　　　　　
      deps: ['echarts'],
    }
  }
});