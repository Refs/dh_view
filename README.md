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

```

* Less Intellisence 
* start git-bash 

之所以要用这个是因为browser-sync 使用vscode自带的终端，打开之后会can't get

> browser-sync 常用的命令

```
    browser-sync start --server --files "css/*.css,*.html"
```


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