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

    var leftLi2SpanExpand = false;
    $('.left-li2 .detail-btn i').hover(function(){
        var self = $(this);
        if(!leftLi2SpanExpand){
            self.siblings('span').css("visibility","visible");
            leftLi2SpanExpand = true;
        }else{
            self.siblings('span').css("visibility","hidden");
            leftLi2SpanExpand = false;
        }
    });

    var leftLi3SpanExpand = false;
    $('.left-li3 .detail-btn i').hover(function(){
        var self = $(this);
        if(!leftLi3SpanExpand){
            self.siblings('span').css("visibility","visible");
            leftLi3SpanExpand = true;
        }else{
            self.siblings('span').css("visibility","hidden");
            leftLi3SpanExpand = false;
        }
    });

    var rightLi1SpanExpand = false;
    $('.right-li1 .detail-btn i').hover(function(){
        var self = $(this);
        if(!rightLi1SpanExpand){
            self.siblings('span').css("visibility","visible");
           rightLi1SpanExpand = true;
        }else{
            self.siblings('span').css("visibility","hidden");
           rightLi1SpanExpand = false;
        }
    });

    // $('#order_list_modal').modal('show');
    $('.left-li2 .detail-btn i').on('click',function(){
        $('#order_list_modal').modal('show');
    });

    

    drawCharts.drawBmapChart($('#main')[0]);
    drawCharts.drawLeftMiddleChart($('#left-li2-chart-div')[0]);
    drawCharts.drawLeftBottomChart($('#left-li3-chart-div')[0]);
});




