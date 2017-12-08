define(["echarts","chartsOption.js","view-theme"], function(ECharts,chartsOption) {
    var obj = {};
    obj.drawBmapChart = function(dom){
        var defultUrlName = "daHengGongTou";
        var mychart = ECharts.init(dom, 'view-theme');
        var option = chartsOption.drawBmapChartOption(defultUrlName);
        mychart.setOption(option);
    }
    return obj;
});