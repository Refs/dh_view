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
            anchor: BMAP_ANCHOR_BOTTOM_LEFT,
            offset: new BMap.Size(0, 50)
        }));
        bmap.disableDoubleClickZoom()
        bmap.addEventListener("dblclick", function (e) {
            var option = chartsOption.drawBmapChartOption(defultSt);
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
                            zoom: 25,
                        }
                    });

                    // 此处重绘 外面的六个图，所用到的信息，及当前电站的信息；
                }
            }
        
        });

    }
    return obj;
});