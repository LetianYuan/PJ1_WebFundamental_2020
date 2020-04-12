# PJ1说明文档

> 袁乐天 19302010019
>
> Github地址：[https://github.com/LetianYuan/PJ1_WebFundamental_2020](https://github.com/LetianYuan/PJ1_WebFundamental_2020)
>
> Github Pages地址：[https://letianyuan.github.io/PJ1_WebFundamental_2020/](https://letianyuan.github.io/PJ1_WebFundamental_2020/)

## 项目完成情况

> 设计文档中提到的所有功能（包括bonus）均已实现，不再赘述

### 首页

* 下拉栏

  下拉栏采用纯CSS的方法。当不需要显示下拉栏时，display属性为none，鼠标放上去时其属性为block。

```css
nav ul.menu
{
    list-style: none;
    display: none;/*下拉栏隐藏*/
    z-index: 9999;/*始终置顶*/
    ...
}
...
nav li.user:hover ul.menu
{
    display: block;/*下拉栏出现*/
}
```

* 头图

  考虑到网络原因，没有采用**高清**大图，放了一张200kb的图片

* 回到页面顶部按钮

  附有回到页面顶部的动画

### 浏览页

* 布局

  主要采用左侧固定宽度，右侧可变宽度的响应式布局

### 搜索页

* 筛选部分

  示例图片中的两个输入框我觉得有些多余，只需要一个按钮，两个单选，一个输入框即可

### 上传界面

* 图片预览

  图片会拥有其原来的长宽比，这通过图片的onload事件中获取其width和height来实现

### 我的照片

* 删除按钮

  删除按钮是红色的，在蓝白灰色调的主题下被凸显出来，警示用户谨慎删除

### 我的收藏

> 基本同“我的照片”

### 登陆页面

* 输入框获得焦点时具有阴影

### 注册界面

> 基本同“登录页面”

### 图片详情页

* 布局

  我将示例图片的布局稍作修改，左边为图片，右边为详细信息

## Bonus完成情况和解决方法

### 更复杂的图片处理

* 图片裁剪

  这个功能非常简单，只需要在css中添加object-fit: cover;即可。

  当图片过于宽时，会裁剪宽度，当图片太高时，会自动裁剪高度

```css
.hot_image_area img
{
    display: block;
    width: 100%;
    height: 170px;
    object-fit: cover; /*自动裁剪图片*/
    border-radius: 10px;
}
```

### 响应式布局

* 手机适配

  为了适配手机，需要在所有页面上加上这句代码

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* 导航栏

  当浏览器窗口变小时，导航栏按钮的大小保持不变，左边与右边之间的距离会变小，这使用float属性可以轻松实现

* 首页

  当浏览器窗口变小时，下方每一行所含有的图片数量会变少，这使用inline-block可以轻松实现

* 浏览页

  当浏览器窗口变小时，筛选结果中每一行所含有的图片数量会变少，这使用inline-block可以轻松实现

  筛选结果的width属性采用calc函数来计算以确保美观

```css
width: calc(100% - 340px);
```

* 搜索页

  当浏览器窗口变小时，缩略图大小不变，右侧文字宽度变小

  搜索结果的width属性采用calc函数来计算以确保美观

```css
width: calc(100% - 80px);
```

* 我的照片、我的收藏

  > 同搜索页

### 界面美观

* 颜色

  网页采用蓝白灰色调，任何地方均不违反这一主题色调

* hover事件

  所有按钮均具有hover变色事件以增进用户体验

## 意见与建议

* 暂无