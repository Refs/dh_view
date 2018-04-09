define(["echarts","app/models/chartsOption","BMap","view-theme"], function(ECharts,chartsOption) {
    var obj = {};
    obj.drawBmapChart = function(dom){
        var defultSt = "daHengGongTou";
        var mychart = ECharts.init(dom,"view-theme");
        var option = chartsOption.drawBmapChartOption(defultSt);
        mychart.setOption(option);

        var bmap = mychart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP],
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            offset: new BMap.Size(0, -3)
        }));
        bmap.disableDoubleClickZoom()
        bmap.addEventListener("dblclick", function (e) {
            // var option = chartsOption.drawBmapChartOption(defultSt);
            mychart.setOption(option);
            // 重绘外面六个图 数据是默认的总数据；
        });

        mychart.on('click', function (params) {
            console.log(params)
            if (params.componentSubType === 'scatter' || params.componentSubType === 'effectScatter') {


                


                if (params.data.length > 1) {
                    mychart.setOption({
                        bmap: {
                            center: [params.data[0], params.data[1]],
                            zoom: 40,
                        }
                    });
                    // 此处重绘 外面的六个图，所用到的信息，及当前电站的信息；
                }
                setTimeout(()=>{
                    var currentTop1 = parseInt( $('#cloud1').css('top'));
                    var currentLeft1 = parseInt( $('#cloud1').css('left')); 
                    var currentTop2 = parseInt( $('#cloud2').css('top'));
                    var currentLeft2 = parseInt( $('#cloud2').css('left')); 
                    var currentTop3 = parseInt( $('#cloud3').css('top'));
                    var currentLeft3 = parseInt( $('#cloud3').css('left')); 
                    var currentTop4 = parseInt( $('#cloud4').css('top'));
                    var currentLeft4 = parseInt( $('#cloud4').css('left')); 
                    $('#cloud1').animate({top: 65 , left: 0}, 1000 ,function() {
                        var self = $(this);
                        self.animate({top: currentTop1, left: currentLeft1},2000);
                    })
                    $('#cloud2').animate({top: 142 , left: 104}, 1000 ,function() {
                        var self = $(this);
                        self.animate({top: currentTop2, left: currentLeft2},2000);
                    })
                    $('#cloud3').animate({top: -400 , left: -200}, 1000 ,function() {
                        var self = $(this);
                        self.animate({top: currentTop3, left: currentLeft3},2000);
                    })
                    $('#cloud4').animate({top: -200 , left: 40}, 1000 ,function() {
                        var self = $(this);
                        self.animate({top: currentTop4, left: currentLeft4},2000);
                    })

                },1500)
            }
        
        });

    }
    obj.drawLeftMiddleChart = function(dom){
        var defultSt = "";
        var mychart = ECharts.init(dom,"view-theme");
        // defultSt is key to search remote sql; 
        var option = chartsOption.drawLeftMiddleOption(defultSt);
        mychart.setOption(option);
    }

    obj.drawLeftBottomChart = function(dom){
        var defultSt = "";
        var mychart = ECharts.init(dom,"view-theme");
        // defultSt is key to search remote sql; 
        var option = chartsOption.drawLeftBottomOption(defultSt);
        mychart.setOption(option);
    }

    obj.drawRightTopChart = function(dom){
        var defultSt = "";
        var mychart = ECharts.init(dom,"view-theme");
        // defultSt is key to search remote sql; 
        var option = chartsOption.drawRightTopOption(defultSt);
        mychart.setOption(option);
    }
    obj.drawRightMidlleChart = function(dom){
        var defultSt = "";
        var mychart = ECharts.init(dom,"view-theme");
        // defultSt is key to search remote sql; 
        var option = chartsOption.drawRightMidlleOption(defultSt);
        mychart.setOption(option);
    }
    
    return obj;
});