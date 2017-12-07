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

### bootstrap填坑

* bootstrap.min.css 相比bootstrap.css少了许多的内容，最明显的就是初始css环境的时候，body上面并没有设置样式；



### 下一步工作的具体思路；
* 点击scatter 后下钻； 通过api 获取 点击的 组件的 data数据；data 数据里面有改点的地理坐标值； 然后调bmap的实例，将其中心设置为点击scater的地理位置，然后调整一下缩放比例即可；  这种思路很ok;
* 更上一层的做法是，看一下bmap的api  地图下钻后，弹出提示框，里面放相应的电站信息；