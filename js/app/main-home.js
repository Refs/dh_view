define(['jquery','app/controls/drawCharts','bootstrap','screenfull'], function($,drawCharts){

    // Variable declaration
    var ulExpand = false;
    var tableScrollTimer;

    // Function declaration
    function scrollTable(obj){
        var self = obj.find('tbody');
        var trHeight = self.find('tr:first').height();
        self.animate({
            'marginTop':-trHeight + 'px'
        },500,function(){
            self.css({
                marginTop : 0
            }).find('tr:first').appendTo(self);
        })
    }

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
    
    var tableScrollTimer;
    
/**
 *  change start 
 */  
    $('.right-li3 .scroll-control').hover(function(){
        clearInterval(tableScrollTimer);
    },function(){
        // here this is point to window ;
        var self = $('.right-li3 .scroll-control');
        tableScrollTimer = setInterval(function(){
            scrollTable(self, -1);
        },2000);
    }).trigger("mouseleave");

    $('.right-li3 .scroll-control').on('mousewheel DOMMouseScroll', function (e) {
        //WebKit内核，Trident内核 => mousewheel
        //Gecko内核 => DOMMouseScroll
        var self = $(this);
        e.preventDefault();
        var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        //e.originalEvent.wheelDelta => 120(up) or -120(down) 谷歌IE内核
        //e.originalEvent.detail => -3(up) or 3(down) 火狐内核
        var delta = Math.max(-1, Math.min(1, value));
        scrollTable(self, delta);


        console.log(self);
        console.log(delta);
        console.log(delta < 0 ? 'down' : 'up');

    });

    function scrollTable(obj,direction){
        // var self = obj.find('tbody');
        var self = obj;
        var trHeight = self.find('.list-tr:first').height();
        self.animate({
            'marginTop': direction*trHeight + 'px'
        },500,function(){
            self.css({
                marginTop : 0
            }).find('.list-tr:first').appendTo(self);
        })
    }

/**
 *  change end 
 */  

    $('#screenFull').click(function () {
        screenfull.toggle();
    });

    $('.left-li2 .detail-btn i').on('click',function(){
        $('#order_list_modal').modal('show');
    });
    $('.left-li3 .detail-btn i').on('click',function(){
        $('#order_list_modal').modal('show');
    });
    $('.right-li1 .detail-btn i').on('click',function(){
        $('#order_list_modal').modal('show');
    });
    $('.right-li2 .detail-btn i').on('click',function(){
        $('#order_list_modal').modal('show');
    });
    $('.right-li3 .scroll-control ').on('click','.list-tr',function(){
        $('#component_watch_modal').modal('show');
    })
    

    drawCharts.drawBmapChart($('#main')[0]);
    drawCharts.drawLeftMiddleChart($('#left-li2-chart-div')[0]);
    drawCharts.drawLeftBottomChart($('#left-li3-chart-div')[0]);
    drawCharts.drawRightTopChart($('#right-li1-chart-div')[0]);
    drawCharts.drawRightMidlleChart($('#right-li2-chart-div')[0]);
});




