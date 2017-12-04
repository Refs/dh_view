# 大恒数据可视化平台项目


## less环境的配置

### vscode 使用的插件

* easy less

```
.vscode/settings.json:
{
    "less.compile": {
        "sourceMap": true,  
        "main": ["${workspaceRoot}\\Less\\main.less"],
        "out": "${workspaceRoot}\\css\\",
        "autoprefixer": "> 5%"
    }
}

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