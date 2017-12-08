define(["echarts","app/models/chartsOption","BMap","view-theme"], function(ECharts,chartsOption) {
    var obj = {};
    obj.drawBmapChart = function(dom){
        var defultUrlName = "daHengGongTou";
        var mychart = ECharts.init(dom);
        var option = chartsOption.drawBmapChartOption(defultUrlName);
        mychart.setOption(option);

        
    }
    return obj;
});