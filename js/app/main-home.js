define(['jquery','app/controls/drawCharts','bootstrap'], function($,drawCharts){

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


    $('.detail-btn i').hover(
        function(){
            var self = $(this);
            var sibSpan = self.siblings('span');
            if(sibSpan.has('visible-not')){
                sibSpan.removeClass('visible-not');
            }
        },function(){
            var self = $(this);
            var sibSpan = self.siblings('span');
            sibSpan.addClass('visible-not');
        }
    );
    

    // $('#order_list_modal').modal('show');
    $('.left-li2 .detail-btn i').on('click',function(){
        $('#order_list_modal').modal('show');
    });

    

    drawCharts.drawBmapChart($('#main')[0]);
    drawCharts.drawLeftMiddleChart($('#left-li2-chart-div')[0]);
    drawCharts.drawLeftBottomChart($('#left-li3-chart-div')[0]);
    drawCharts.drawRightTopChart($('#right-li1-chart-div')[0]);
    drawCharts.drawRightMidlleChart($('#right-li2-chart-div')[0]);
});




