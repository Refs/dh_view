define([
    'jquery',
    'echarts',
    'BMap',
    'view-theme',
    'bootstrap'
],drawEcharts);

function drawEcharts($, ECharts,BMapExtension) {
    var mychart = ECharts.init($('#main')[0],'view-theme');
    // display data


    
    var option = {
        
        bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: true,
            mapStyle: {
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
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            silent: true,
            lineStyle: {
                normal: {
                    opacity: 0.2,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 200
        } 
        , {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
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
            zlevel: 1
        }, 
        {
            name: '网格员',
            type: 'scatter',
            coordinateSystem: 'bmap',
            symbol: 'rect',
            data: convertData([{
                    name: "网格员1",
                    value: 9
                },
                {
                    name: "网格员2",
                    value: 120
                },
                {
                    name: "网格员3",
                    value: 211
                },
            ]),
            symbolSize: 25,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '民警',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData_police([{
                    name: "民警1",
                    value: 900
                },
                {
                    name: "民警2",
                    value: 1200
                },
                {
                    name: "民警3",
                    value: 2111
                },
            ]),
            symbolSize: function (val) {
                return 25;
            },
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
            zlevel: 1
        },
       
    ]
    
    };
    mychart.setOption(option);

    var bmap = mychart.getModel().getComponent('BMapExtension');
    console.log(bmap)

    // var BMapExt = new BMapExtension($('#main')[0], BMap, ECharts, {
    //     enableMapClick: false
    // });

    // console.log(BMapExt);
}
