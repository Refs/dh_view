//The build will inline common dependencies into this file.

requirejs.config({
    baseUrl: './js',
    paths: {
      'jquery':                   'vendor/jquery',
      'bootstrap':                'vendor/bootstrap',
      'echarts' :                 'vendor/echarts'
    },
    shim: {
      'bootstrap':                ['jquery']
    }
});
