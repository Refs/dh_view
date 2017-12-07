define([
    'jquery',
    'echarts',
    'BMap',
    'view-theme',
    'bootstrap'
], drawEcharts);

function drawEcharts($, ECharts) {
    drawBmpEcharts($, ECharts);
    // drawBarEcharts(echarts);
    // drawRoseEcharts(echarts);
    // drawVerticalBarEcharts(echarts);
    // drawAreaLineEcharts(echarts);
    // drawMixBarLineEcharts(echarts);
    // drawDoughnutEcharts(echarts);
}


function drawBmpEcharts($, ECharts) {
    var mychart = ECharts.init($('#main')[0], 'view-theme');

    // bmap center coordinate array
    var bmapCenter = [121.4648, 31.2891];

    // bmap scale
    var bmapZoom = 15;

    //  if wheel could scale bmap
    var isroam = true;

    // map-style json
    var bmapStyleJson = {
        'styleJson': [{
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
                'color': '#031628'
            }
        }, {
            'featureType': 'land',
            'elementType': 'geometry',
            'stylers': {
                'color': '#000102'
            }
        }, {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
                'visibility': 'off'
            }
        }, {
            'featureType': 'arterial',
            'elementType': 'geometry.fill',
            'stylers': {
                'color': '#000000'
            }
        }, {
            'featureType': 'arterial',
            'elementType': 'geometry.stroke',
            'stylers': {
                'color': '#0b3d51'
            }
        }, {
            'featureType': 'local',
            'elementType': 'geometry',
            'stylers': {
                'color': '#000000'
            }
        }, {
            'featureType': 'railway',
            'elementType': 'geometry.fill',
            'stylers': {
                'color': '#000000'
            }
        }, {
            'featureType': 'railway',
            'elementType': 'geometry.stroke',
            'stylers': {
                'color': '#08304b'
            }
        }, {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
                'lightness': -70
            }
        }, {
            'featureType': 'building',
            'elementType': 'geometry.fill',
            'stylers': {
                'color': '#000000'
            }
        }, {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
                'color': '#857f7f'
            }
        }, {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': {
                'color': '#000000'
            }
        }, {
            'featureType': 'building',
            'elementType': 'geometry',
            'stylers': {
                'color': '#022338'
            }
        }, {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
                'color': '#062032'
            }
        }, {
            'featureType': 'boundary',
            'elementType': 'all',
            'stylers': {
                'color': '#465b6c'
            }
        }, {
            'featureType': 'manmade',
            'elementType': 'all',
            'stylers': {
                'color': '#022338'
            }
        }, {
            'featureType': 'label',
            'elementType': 'all',
            'stylers': {
                'visibility': 'off'
            }
        }]
    }

    // lines data； 
    var linesData = [{
            coords: [
                // multiple array to make pline;
                [121.4648, 31.2891],
                [117.29, 32.0581],
                [122.2229, 39.4409]
            ],
            lineStyle: {
                normal: {
                    color: "rgba(223,90,90,1)",
                    curveness: 0.2
                }
            }

        },
        {
            coords: [
                // multiple array to make pline;
                [118.4766, 39.6826],
                [117.29, 32.0581],
            ],
            lineStyle: {
                normal: {
                    color: "yellow",
                    curveness: 0.2
                }
            }

        },
    ]
    // format lines data;
    var convertLinesData = function (data) {
        return data;
    };

    // effectScatter data;
    var effectScatterData = [
        [104.075082,30.653696,"effectScatter1",900],
        
    ]
    // format effectScatter data
    var convertEffectScatterData = function(data){
        return data;
    }

    // datai代表component对应的数据data数组的元素data[i]；可以根据data[i]的内容（如value的维度）来设置符号的大小；
    var setEffectScatterSymbolSize =  function(datai){
        return 25;
    }

    var option = {
        // bmap componoent
        bmap: {
            center: bmapCenter,
            zoom: bmapZoom,
            roam: isroam,
            mapStyle: bmapStyleJson
        },
        // lines compomoent
        series: [{
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: convertLinesData(linesData),
                silent: true,
                lineStyle: {
                    normal: {
                        opacity: 0.2,
                        width: 1
                    }
                },
                progressiveThreshold: 500,
                progressive: 200
            },
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: convertLinesData(linesData),
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                effect: {
                    constantSpeed: 50,
                    show: true,
                    trailLength: 0.5,
                    symbolSize: 1.5
                },
                // 
                zlevel: 1
            },
            {
                name: 'base station',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertEffectScatterData(effectScatterData),
                symbolSize:function(datai){
                    var symbolsize = setEffectScatterSymbolSize(datai);
                    return symbolsize;
                } ,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
            },

        ]
    };

    mychart.setOption(option);

    var bmap = mychart.getModel().getComponent('bmap').getBMap();
}