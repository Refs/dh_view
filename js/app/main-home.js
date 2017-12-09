define(['jquery','app/controls/drawCharts'], function($,drawCharts){

    $('.chart-toggle-menu ul').on('show:toggle',function(){
        var self = $(this);
        if(self.is(":hidden")){
            self.slideDown();
        }else{
            self.slideUp();
        }
    });
    $('.chart-toggle-menu').hover(function(){
        $(this).find('ul').trigger('show:toggle');
    });
    $('.chart-toggle-menu ul li').click(function(){
        $(this).parent('ul').trigger('show:toggle')
        event.stopPropagation();
    });

    drawCharts.drawBmapChart($('#main')[0]);
    drawCharts.drawLeftMiddleChart($('#left-li2-chart-div')[0]);
});




