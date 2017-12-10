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

    var spanExpand = false;
    $('.detail-btn i').hover(function(){
        var self = $(this);
        
        if(!spanExpand){
            self.siblings('span').css("visibility","visible");
            spanExpand = true;
        }else{
            self.siblings('span').css("visibility","hidden");
            spanExpand = false;
        }

    });

    $('#order_list_modal').modal('show');
    
    $('.detail-btn i').on('click',function(){
        $('#order_list_modal').modal('show');
    });

    

    drawCharts.drawBmapChart($('#main')[0]);
    drawCharts.drawLeftMiddleChart($('#left-li2-chart-div')[0]);
});




