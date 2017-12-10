define(['jquery','app/controls/drawCharts'], function($,drawCharts){

    var ulExpand = false;
    $('.chart-toggle-menu').hover(function(){
        if (!ulExpand) {
			$(this).children("ul").show();
			ulExpand = true;
		} else {
			$(this).children("ul").hide();
			ulExpand = false;
		}
    });
    $('.chart-toggle-menu').click(function(){
        $(this).children("ul").slideUp();
		ulExpand = true;
		event.stopPropagation(); 
    })
    $('.chart-toggle-menu ul li').click(function(){
        var self = $(this);
        var text = self.children('span').text();
        self.parent('ul').siblings('.menu-title').children('span').text(text);
        
    });

    $('.detail-btn i').hover(function(){
        var self = $(this);
        // visibility
        self.siblings('span').css("visibility","visible");
    });

    drawCharts.drawBmapChart($('#main')[0]);
    drawCharts.drawLeftMiddleChart($('#left-li2-chart-div')[0]);
});




