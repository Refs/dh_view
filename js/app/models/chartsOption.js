define(["jquery"], function ($) {
    var obj = {};
    // base different dataurl to concat different url ; so ajax can back different data; echarts can render differernt chart;
    obj.drawBmapChartOption =
        function (dataUrl) {
            // random color
            var randomColor = function () {
                var color = [
                    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                ];
                var i = Math.round(Math.random() * 15);
                return color[i];
            }

            // heFei base station coordinate 
            var baseStationCoordinate = [117.29, 32.0581];

            // bmap center coordinate array
            var bmapCenter = [121.4648, 31.2891];

            // bmap scale
            var bmapZoom = 5;

            //  if wheel could scale bmap
            var isbmaproam = true;

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

            var effectScatterItemStyle = {
                normal: {
                    color: "#f4e925",
                    shadowBlur: 10,
                    shadowColor: "#333"
                }
            };
            // format effectScatter data
            var convertEffectScatterData = function (data) {
                return [data];
            }
            // effectscatter symbsize can set base datai's value；
            var setEffectScatterSymbolSize = function (datai) {
                return 25;
            }

            var scatterItemStyle = {
                normal: {
                    color: "#FD4C09"
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            };
            // scatter data+++++++++++++++++++++ajax!!!!!!+++++++++++++++++++++++++++++;
            var scatterData = (function () {
                // //here get the data from remote server
                // var res = [];
                // var url = "http://dfasd" + dataUrl + "dfasdfas";
                // $.ajax({
                //     url: "url",
                //   }).done(function(data) {
                //      //convert date to specify format
                //       res.push(data);
                //   });
                // return res;
                return [
                    [113.8953, 22.901, "scatter1", 900],
                    [124.541, 40.4242, "scatter2", 900],
                    [115.0488, 39.0948, "scatter2", 900],
                    [110.3467, 41.4899, "scatter2", 900],
                ]
            })(dataUrl);

            // format scatter data
            var convertScatterData = function (data) {
                // here format the data to that series data attribute can receive
                // var res = [];
                // $.each(data,function(i,value){
                //     ...
                //     res.push()
                //     ....
                // })
                // return res;
                return data;
            }
            // sccatter symbsize can set base datai's value；
            var setScatterSymbolSize = function (datai) {
                return 7;
            }


            // ==========control lines==================
            var linesEffectSymbolSize = 2;
            var linesEffectConstantSpeed = 50;
            var linesEffectTrailLength = 0.5;
            var linesItemStyle = [{
                    normal: {
                        opacity: 0.2,
                        width: 1
                    }
                },
                {
                    normal: {
                        width: 0
                    }
                }
            ];
            // here assume there is a line from every scatter to the sole effectScatter; 
            var convertLinesData = function (scatterData) {
                var res = [];
                for (i = 0; i < scatterData.length; i++) {
                    var obj = {};
                    obj.coords = [scatterData[i], baseStationCoordinate];
                    obj.lineStyle = {
                        normal: {
                            color: "#F7D627",
                            curveness: 0.2
                        }
                    }
                    res.push(obj);
                }
                return res;
            }

            var option = {
                // bmap componoent
                bmap: {
                    center: bmapCenter,
                    zoom: bmapZoom,
                    roam: isbmaproam,
                    mapStyle: bmapStyleJson
                },
                // lines compomoent
                series: [
                    {
                        type: 'lines',
                        coordinateSystem: 'bmap',
                        data: convertLinesData(scatterData),
                        silent: true,
                        lineStyle: linesItemStyle[0],
                        progressiveThreshold: 500,
                        progressive: 200
                    },
                    {
                        type: 'lines',
                        coordinateSystem: 'bmap',
                        data: convertLinesData(scatterData),
                        lineStyle: linesItemStyle[1],
                        effect: {
                            constantSpeed: linesEffectConstantSpeed,
                            show: true,
                            trailLength: linesEffectTrailLength,
                            symbolSize: linesEffectSymbolSize
                        },
                        // 
                        zlevel: 1
                    },

                    {
                        name: 'baseStation',
                        type: 'effectScatter',
                        coordinateSystem: 'bmap',
                        data: convertEffectScatterData(baseStationCoordinate),
                        symbolSize: function (datai) {
                            var symbolsize = setEffectScatterSymbolSize(datai);
                            return symbolsize;
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
                                show: false
                            }
                        },
                        itemStyle: effectScatterItemStyle,
                    },
                    {
                        name: 'powerStation',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: convertScatterData(scatterData),
                        symbolSize: function (datai) {
                            var symbolsize = setScatterSymbolSize(datai);
                            return symbolsize;
                        },
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: scatterItemStyle,
                    },
                ]
            };
            return option;
        };
    
    return obj;
});