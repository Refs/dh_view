# 大恒数据可视化平台项目


## less环境的配置

### vscode 使用的插件

* easy less

```
{
    "less.compile": {
        "sourceMap": true,  
        "main": ["${workspaceRoot}\\Less\\main.less"],
        "out": false,
        "autoprefixer": "> 5%"
    }
}

```

```
main.less 首行添加注释：
// out: ../css/

```

```
vscode 全局配置：
"less.compile": {
    "sourceMap": true  // true => generate source maps (.css.map files)
    
},

下面两个，用来设置less文件更改时，自动保存less, 也就是可以自动编译less为css,css改变，配合browser-sync在浏览器上同步显示；感觉上就类似于，直接在chrome上面修改是一样的； 习惯于在线下进行调试，因为考虑到，浏览器的分屏；

"workbench.panel.location": "bottom",
"files.autoSave": "afterDelay",

```

* Less Intellisence 


* start git-bash 

之所以要用这个是因为browser-sync 使用vscode自带的终端，打开之后会can't get

> browser-sync 常用的命令

```
    browser-sync start --server --files "css/*.css,*.html"
```

> 基本的思路是，将workspace 添加到chrome ; 在source面板保存后，easy-less会自动编译； 然后browser-sync会检测到文件更新，从而刷新浏览器；


## js环境配置

### 安装typings使vscode拥有智能提示的能力

* 核心代码：
```
    （貌似现在需要连vpn 才可以下载t.ds文件）
    typings search bootstrap
    typings install --save dt~bootstrap --global
```
* 根目录生成 jsconfig.json文件

* --save会生成typings.json文件，存有安装的记录；

* 设置gitignore文件夹，使上传的时候 不包括 typings文件夹；


## bootstrap整体框架

```less
// Core variables and mixins
//定义变量，方便后面调用
@import "variables.less";               
//定义混合 这类似定义函数或者宏，在mixins文件夹中可看到所定义的函数
@import "mixins.less";                  

// Reset and dependencies
//标准化css，这是一个专门将不同浏览器的默认css特性设置为统一效果的css库，编译后对应源码为8~190行
@import "normalize.less";               
//打印样式，编译后对应源码为192~266行
@import "print.less";                   
//图标样式，编译后对应源码为267~885行
@import "glyphicons.less";              

// Core CSS  核心CSS
//脚手架，相当于全局样式，编译后对应源码为886~989行
@import "scaffolding.less";             
//排版样式，编译后对应源码为990~1335行
@import "type.less";                    
//代码样式，编译后对应源码为1336~1389行
@import "code.less";                    
//栅格系统，这是Bootstrap支持响应式的重点，编译后对应源码为1390~2056行
@import "grid.less";                    
//表格样式，编译后对应源码为2057~2296行
@import "tables.less";                  
//表单样式，编译后对应源码为2297~2781行
@import "forms.less";                   
//按钮样式，编译后对应源码为2782~3171行
@import "buttons.less";                 

// Components  组件
//组件中折叠和隐藏动画，编译后对应源码为2782~3171行
@import "component-animations.less";    
//下拉菜单及下三角符号，编译后对应源码为3209~3348行
@import "dropdowns.less";               
//按钮组，编译后对应源码为3349~3520行
@import "button-groups.less";           
//输入框组，编译后对应源码为3521~3674行
@import "input-groups.less";            
//导航，编译后对应源码为3675~3868行
@import "navs.less";                    
//导航条，编译后对应源码为3869~4393行
@import "navbar.less";                  
//面包屑，编译后对应源码为4394~4411行
@import "breadcrumbs.less";             
//默认分页，编译后对应源码为4412~4504行
@import "pagination.less";              
//翻页，编译后对应源码为4505~4542行
@import "pager.less";                   
//标签，编译后对应源码为4543~4609行
@import "labels.less";                  
//徽章，编译后对应源码为4610~4648行
@import "badges.less";                  
//巨幕，编译后对应源码为4649~4686行
@import "jumbotron.less";               
//缩略图，编译后对应源码为4687~4712行
@import "thumbnails.less";              
//警告框，编译后对应源码为4713~4787行
@import "alerts.less";                  
//进度条，编译后对应源码为4788~4881行
@import "progress-bars.less";           
//媒体对象，编译后对应源码为4882~4915行
@import "media.less";                   
//列表组，编译后对应源码为4916~5091行
@import "list-group.less";              
//面板，编译后对应源码为5092~5426行
@import "panels.less";                  
//具有响应式特性的嵌入内容，编译后对应源码为5427~5452行
@import "responsive-embed.less";        
//well效果，编译后对应源码为5453~5474行
@import "wells.less";                   
//关闭按钮图标，编译后对应源码为5475~5499行
@import "close.less";                   

// Components w/ JavaScript
//模态框，编译后对应源码为5500~5622行
@import "modals.less";                  
//工具提示，编译后对应源码为5623~5720行
@import "tooltip.less";                 
//弹出框，编译后对应源码为5721~5841行
@import "popovers.less";                
//轮播，编译后对应源码为5842~6063行
@import "carousel.less";                

// Utility classes
//实用工具类，编译后对应源码为6064~6147行
@import "utilities.less";               
//响应式工具类，编译后对应源码为6148~6357行
@import "responsive-utilities.less";   

```


### 设置字体less

大部分与bootstrap都是一样的，其中一个@{icon-font-svg-id}，打开字体svg文件，一看便知

```less
<font id="iconfont" horiz-adv-x="1024" >
  <font-face
    font-family="iconfont"
    font-weight="500"
    font-stretch="normal"
    units-per-em="1024"
    ascent="896"
    descent="-128"
  />

//   其中 id 指的就是icon-font-svg-id
```



### 利用echarts的在线主题构建工具，去构建主题；


### echarts踩坑 

* echarts刚开始实例化的时候，并没有getModel()的方法，只有在运用setOption()方法之后，才会有此方法；即：

```js
    var mychart = ECharts.init($('#main')[0],'view-theme');
    
    // var option = {};
    // mychart.setOption(option);

    var bmap = mychart.getModel().getComponent('BMapExtension');
    // 此处会报错，在没有option之前，没有getModel的方法；

```

* package 引包的时候的坑

name: 指的是引用名；
location: 指的是文件js文件所在目录；（不是直接到文件，这是一个坑）
main: 就是js文件名；可以不添加js;

* bmap.js 与 main.js文件混淆

echarts2.0目录里面，在bmap扩展中有两个文件，一个是bmap.js 一个是main.js 两者不是同一个文件，使用的方式更不同；在echarts3.0里面，只提供一个bmap.js文件；这就恶心了； 

```js
    // 引用main.js 的时候，可以使用；
   var BMapExt = new BMapExtension($('#main')[0], BMap, echarts, {
            enableMapClick: false
        });
```

* 关于bamap的设置；bmap主要配置就是 center, zoom, mapStyle。

    + 首先引入echarts.js,bmap.js,百度api。前两个在dist中可以找到，api需要去百度申请key
    + option中加入bmap，设置一些参数，此时不需要再添加geo，然后series中的coordinateSystem设置为bmap，这样就可以生成地图
    + 如果再添加其他方法就需要通过chart.getModel().getComponent('bmap').getBMap()获取百度地图实例，然后参考百度api
    https://github.com/ecomfe/echarts/issues/3116

*  关于这句话理解的坑var bmap = mychart.getModel().getComponent('bmap').getBMap();

    + getModel必须要等到 setOption后才有； 因为getModel（获得的对象就是），

```js
        // 只有setOption之后，this上面才有_model属性；
		echartsProto.setOption = function (option, notMerge, lazyUpdate) {
            if (true) {
                zrUtil.assert(!this[IN_MAIN_PROCESS], '`setOption` should not be called during main process.');
            }

            this[IN_MAIN_PROCESS] = true;

            if (!this._model || notMerge) {
                var optionManager = new OptionManager(this._api);
                var theme = this._theme;
                var ecModel = this._model = new GlobalModel(null, null, theme, optionManager);
                ecModel.init(null, null, theme, optionManager);
            }

            this._model.setOption(option, optionPreprocessorFuncs);

            if (lazyUpdate) {
                this[OPTION_UPDATED] = true;
            } else {
                updateMethods.prepareAndUpdate.call(this);
                this._zr.refreshImmediately();
                this[OPTION_UPDATED] = false;
            }

            this[IN_MAIN_PROCESS] = false;

            this._flushPendingActions();
        };
        // getModel 用于返回_model属性值
        echartsProto.getModel = function () {
            return this._model;
        };
        // 属性_model指的就是option;
        echartsProto.getOption = function () {
            return this._model && this._model.getOption();
        };

```

*   由于自己不熟，就先入为主的认为getComponent() 并不是针对bmap而言的，getModel获取的是option,而 getModel().getComponent()获取的是option 内部的组件；类似geo grid timeline series 等；bmap只是其中一个；而getMap()是bmap组件特有的一个方法； 这样一条路下来，就通了；

* ecahrts 地图压盖 未能实现； https://github.com/ecomfe/echarts/issues/5935



* zlevel的具体使用 用于制造明暗对比，动静对比的效果；

```js
{
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
        // 将width为0 的线，压到width为1的线上面；这样底下的线颜色就会暗/细； 而上面线上的效果点的颜色不变，这样就可以实现明暗对比，或动静对比；
        zlevel: 1
    }, 
```

* polyline 属性的坑；

默认为false 只能绘制单条线, 开启之后，可以绘制多段线； 但开启之后， itemstyle.normal.curveness会失效，即 不可以调整line为曲线，只能是直线；这是一个坑，官方文档上面也没有提到；



### bootstrap填坑

* bootstrap.min.css 相比bootstrap.css少了许多的内容，最明显的就是初始css环境的时候，body上面并没有设置样式；



### 下一步工作的具体思路；

* 了解lines的data 与 scatterdata之间的关系；可以利用后者的数据，去拼接前者的数据；因为原生的数据，就只有一个经纬度，和电站名

```js

// lines data
[{
    coords:[
        ["104.096113","30.615077"],
        ["200.096113","130.615077"],
        ["304.096113","230.615077"],
        ["404.096113","330.615077"],
        ["504.096113","430.615077"],
    ],
    lineStyle:{
        normal: {
             color: "rgba(223,90,90,1)" 
        }
    }
    
}]

// effectScatter data
[
    [104.075082,30.653696,"effectScatter1",900],
    [104.075082,30.653696,"effectScatter2",900],

]

// scatter data
[
    [104.075082,30.653696,"scatter1",900],
    [104.075082,30.653696,"scatter2",900],

]


```


[12323,1231243,'长丰电站','电站规模']

[104.075082,30.653696,"effectScatter1",900], scatter的data

[{
    coords:[
        ["104.096113","30.615077"], --- scatterdata
        ["200.096113","130.615077"], --- 基站(合肥的coordinate)
    ],
    lineStyle:{
        normal: {
             color: "rgba(223,90,90,1)"  --- 颜色可以在拼接数据的时候控制利用函数控制；具体可以先写一个有10个颜色的数组组color  ; 然后利用color[0-10之间的随机数]的形式来调用；或者有时间，可以做成渐变的效果（看文档）
        }
    }
    
}]  lines的data 

```js
var baseStationCoordinate = [117.29, 32.0581];
function(scatterData){
    var res = [];
    for(i=0;i<scatterData.length;i++){
        var obj = {};
        obj.coords = [baseStationCoordinate].unshift(scatterData[i]);
        obj.lineStyle:{
            normal: {
             color: "#F7D627" 
            }
        }
        res.push(obj);
    }
    return res;
}

```

```js
// 数组在前面插入元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");

```


* 点击scatter 后下钻； 通过api 获取 点击的 组件的 data数据；data 数据里面有改点的地理坐标值； 然后调bmap的实例，将其中心设置为点击scater的地理位置，然后调整一下缩放比例即可；  这种思路很ok;



*  结合bootdtrap 与 jquery  在地图上事件触发时实现，tootips与modal 的特效；而不使用echarts本事自带的tootip 与modal 因为；作用确实有限；

```js
    // 点击 地图 下钻到具体的电站；
    // 双击 继续下钻；

```

* 扩展百度地图的控件，利用百度地图，从天空中 直接观察 组件，类似于阳光电源的效果；
工投兴庐的位置坐标： 117.282329,31.929392  zoom: 25, 

单次点击下钻；双击显示组件监控图；
点击卫星按钮，切换卫星视图；
向下滚动鼠标，复原地图缩放；

> 而实现这一点，首先要解决的是，单击与双击事件的冲突问题； 其实这里利用jquery自定义函数的特性，根本就无需，解决这一点；

```js
// click的事件处理函数；
function (){
    // 判断地图是否已经缩放；
    if(zoom < 0){
        //主动触发bmap上自定义的事件 使其缩放到以coponent 为中心点的位置；
    }else(
        // 判断tootips 是否已经show 或 modal 是否已经打开
        if(!tootips.show()){
            //主动触发 modal或 tootips 使其show 
        }
    )
}

// 鼠标回滚
function(){
    // 隐藏弹窗
    // 地图恢复比例；
}

// 添加组件，切换卫星视图；

//先将上述的功能实现，后续的调整，再说吧；

// 注意看一下，卫星切换按钮，有没有处理事件，如果有的话，就更好了； 或者更进一步，查看原生控件上面绑定的函数，用两个div来模拟这个控件；这样就可以通过控制这两个div 来控制与触发更多的函数了； 
```

> 总之要实现的就三个功能；地图下钻； 弹出modal 或tootips; 卫星视图；如何实现与提升操纵性，明天再说吧；

> 地图下钻这一步，最好是不采用modal框了，或tootip了； 由于地图每次缩放的中心点，都是以scatter的坐标进行的，即缩放之后不同scatter在屏幕中的位置是固定的；简单点的做法是在屏幕中固定的某个位置放一个div; 当地图缩放事件触发之后，让其显示并展示相应的数据；

> 更高一级的做法是，利用requirejs做spa操作；即再做一个1920*1080的div，绝对定位到main上面，作为公共刷新区域；但这样可能是不合适的；因为不能整体扣在上面；那样地图上面就像隔着一层玻璃；没办法去点击； 外面的图片还是需要一点一点的拼出来，与切出来； 一块一块的去凑； 和原先的做法是一样的；

> 除上面一点需要注意以外，外面几个小chart 的处理函数； 还要对外提供一个接口option; 因为针对于不同的用户电站，其option是不同的；

 ```js
    function drawEcharts(echarts, BMapExtension) {
        drawBmpEcharts(echarts, BMapExtension);
        drawBarEcharts(echarts);
        drawRoseEcharts(echarts);
    };
 ```
 > 现在要将上面的式子，按照reuqire的思想，改造成下面的样子

```js
 function drawBmpEcharts(echarts, BMapExtension) {
     .....

     echarts.setOptions(option);
    //  地图 绘制完毕 绘制其它的地图；即主入口只有一个就是地图的入口；将drawBarEcharts单独的作为一个模块，去调用就可以了；
     require('drawBarEcharts');
     require('drawRoseEcharts');

 }

```

```js
// drawBarEcharts.js:
define(['option','echarts'],function(option,echarts){
    var myecharts = echart.init(dom);
    myecharts.setoption(option);
})

```


```js
// 理想的情况是 根据用户电站的不同而返回不同的option 而不是上来就将每个图表对应的option写死；
// baroption.js
 window.bar = barvalue;
 define(['data'],function(){
    //  刚开始的应该是请求的整个公司的数据；然后利用这些数据，去拼成option;
    //后来可能请求的就是某个电站的数据，然后利用这些数据去拼option；
    // 也就是说外面应该有数据进来，否则没办法改变，改变请求的链接；
    // 怎么去接收数据喃；
    $.ajax(/barvalue....,function(
        .....
    ))
     return option = {
         ....
     }
 })

```

```js
// 解决的思路，模块化的函数，虽然是处在了不同的js文件中,但其运行依旧是在当前的全局作用域内运行的；甚至是在require函数时的作用范围内所运行的；这一点的理解特别重要； 也就是其依旧是可以访问到外部的变量的，并非是在一个封闭的壳内， 其依旧是可以范围外部变量，和通过return 将自己的变量返回给外部的； 

// 如果上述的原理是正确的，我们可以将点击scatter时 所产生的数据，返回到全局作用域中；这样options函数，就可以访问全局变量，拼接链接，从而从服务器抓取的数据。拼接option; 这样上层函数就能得以执行；

// 现在的问题就在于 上述原理是否正确；自己可以测试一下，define() 内的function 是否可以访问外部变量；

// 其实：
require(['a.js'],function(a){
    // a 是function 作用域内部最顶层的变量，即a 是处在作用域范围内的；
    //a.js 运行后 将返回值 赋值给a , 相当于a.js是在函数内部运行的； 即应该能访问函数内部的变量，或者差一点，函数外部的变量； 这个可以试一试；
    
})

```

```js
/***************************************结论****************************/ 
// 面向对象中，变量是无法传递的，所以上面的可能都是猜错了；
// a.js:
define(['$'],function($){
    // 这一步函数运行中，是不可能接受外部变量的；
    var obj = {};
    var a = 3;
    obj.sum = function(num){
        return a + num;
    }
    return obj;
})

// b.js
function(){
    var b = 7;
    require(['a.js'],function(object){
        var he = object.sum(b);
        // console.log(he)   10
    })
}

// 即a.js运行中 不能去接收外部的变量，但是 其返回对象的方法函数，即能接收对象也能产出结果；我们引用模块目的就是得到一种处理方法，而不是一个结果；这是一个误区；

// 模块化返回的是处理的方法，而不是一个结果，运用返回的方法，可以得到我们想要的结果；  刚才的误区就在于想直接利用require模块就得到结果-----就像一个机器没有进料口，不可能会返回处理结果；其只能返回一个带具体方法的对象；而这个方法，即可以接受数据，又也可以产出结果；
/***********具体的应用*****************************************/ 

conponent.on('click',function(params){
    require(['option.js'],function(object){
        var option = object.initOption(params.data[i]); //获取option对象；

        require(['drawchart.js'],function(object){
            object.draw(option,dom);  //完成绘图 dom是要传入的实参；
        })
    })
  
})

// option.js
define(['$'],function($){
    var obj = {};
    obj.initOption = function(data){
        .....
        return data;
    }
    return obj;
})

// drawchart.js // 或每个图形都细分一下
define(['echarts'],function(echarts){
    var obj = {};
    obj.draw = function(option,dom){
        var mycharts = echarts.init(dom);
        myecharts.setOption(option);
    }

})

// 这样写下来，就很舒服了，这才是模块编程的实质吧；！！！！！！！！！！！！！！


/***************************************结论****************************/ 
```










```js
// data.js  
// 用来接收与返回数据；数据返回好返回，关键是要接收的数据从哪来；

// 在地图的界面，用户点击相应电站的时候，将事件触发，事件触发会产生许多的数据，而这些return出去；然后让data接收就可以了；
define([drapBmap],function(){
    rerturn data ;
})
```

```js
//这一切得有一个触发事件；否则不会动起来；
 $(window).on('hashchange', function (e) {}
```



```js
//怎么能让option不写死喃； 当用户点击某一个电站的时候，会影响option的输出结果；；；；进而影响到echarts的渲染；
```