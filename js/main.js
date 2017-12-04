require.config({
    baseUrl: '../js/app',
    paths: {
        'jquery': '/js/library/jquery.min',
        'bootstrap': '/js/library/bootstrap.min',
        'echarts' : '/js/library/echarts.min',
        'bmap' : '/js/library/bmap.min',
        'screenfull' : '/js/library/screenfull.min'
    },
    shim: {
        
    }
});

require(['jquery','bootstrap','echarts'],function($,bootstrap,echarts){

})
