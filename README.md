# 轱辘 一个 Vue 组件

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用

1. 添加 css 样式
   使用本框架前，请在 css 中开启 border-box

    ```
    *{box-sizing:border-box;}
    *::before{box-sizing:border-box;}
    *::after{box-sizing:border-box;}
    
    ```
    IE 8 及以上浏览器都支持此样式
    
    你还需要设置默认颜色等变量(后续会改为 scss 变量)
    
    ```
    html {
             --button-height: 32px;
             --font-size: 14px;
             --button-bg: white;
             --button-active-bg: #eee;
             --border-radius: 4px;
             --border-color: #999;
             --border-color-hover: #666;
             --color: #333;
            }
    ```
    IE  15 及以上浏览器都支持此样式

2. 安装 gulu
    ```
    npm i --save meijianxiao-test
    ```
3. 引入 gulu
    ```
    import {Button,ButtonGroup,Icon} from 'meijianxiao-test'
    import 'meijianxiao-test/dist/index.css'
    
    export default {
    name:'app',
    components:{
        HelloWorld,
        'g-button':Butoon,
        'g-icon':Icon
        }
   }
    ```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

作者：meijianxiao