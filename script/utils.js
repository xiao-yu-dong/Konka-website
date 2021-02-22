// 获取第一个元素子节点
function getFirstChild(dom){
  if (dom.firstElementChild) {
    return dom.firstElementChild
  } else {
    return dom.firstChild
  }
}
// 获取最后一个元素子节点
function getLastChild(dom){
  if (dom.lastElementChild) {
    return dom.lastElementChild
  } else {
    return dom.lastChild
  }
}
// 获取下一个兄弟子节点
function getNextNode(dom){
  if (dom.nextElementSibling) {
    return dom.nextElementSibling
  } else {
    return dom.nextSibling
  }
}
// 获取上一个兄弟子节点
function getPrevNode(dom){
  if (dom.previousElementSibling) {
    return dom.previousElementSibling
  } else {
    return dom.previousSibling
  }
}
// 生成 min~max区间的随机整数
function randomInt(min,max){
  return Math.round(Math.random()*(max-min))+min
}
// 生成随机16进制颜色值
function randomColor(){
  var str = '0123456789abcdef'// 0-15
  var color = '#'
  for (var i = 0, len = 6; i < len; i++){
    var index = randomInt(0,15)
    color += str[index]
  }
  return color
}
// 生成n位随机验证码（数字、字母（大小））
function randomCode(n){
  var num = ''
  for (var i = 0, len = n; i < len; i++){
    do {
      var ascii = randomInt(48,122)
    } while(ascii>57&&ascii<65 || ascii>90&&ascii<97)
    num += String.fromCharCode(ascii)
  }
  return num
}
// 判断数组中是否包含某个值
function has(arr,val){
  for (var i = 0, len = arr.length; i < len; i++){
    if (arr[i] == val) {
      return true
    }
  }
  return false
}
// 数组去重
function norepeat(arr){
  var arr1 = []
  for (var i = 0, len = arr.length; i < len; i++){
    if (!has(arr1,arr[i])) {
      arr1.push(arr[i])
    }
  }
  return arr1
}
// 获取元素样式 兼容IE678
function getStyle(dom,attr){
  if (dom.currentStyle) {
    return dom.currentStyle[attr]
  } else {
    return getComputedStyle(dom)[attr]
  }
}

function byClass(oClass){
  
}

// 添加事件监听（兼容低本版IE）
function addEvent(dom,type,callback){
  if (dom.addEventListener) {
    dom.addEventListener(type,callback)
  } else {
    dom.attachEvent('on'+type,callback)
  }
}
// 移除事件监听（兼容低本版IE）
function removeEvent(dom,type,callback){
  if (dom.removeEventListener) {
    dom.removeEventListener(type,callback)
  } else {
    dom.detachEvent('on'+type,callback)
  }
}
// 事件委托
function on(parent,type,selector,callback){
  // 1.给父级绑定事件
  addEvent(parent,type,function (ev){//父级的事件处理函数
    var e = ev || event//事件对象
    var target = e.target || e.srcElement//事件源
    // 获取选择器第一个字符
    var selector_first = selector.substr(0,1)
    // 记录选择器第一个字符后面的内容
    var selector_last = null
    // 记录选择器类型（id class 标签）
    var selector_type = null
    // 根据第一个字符判断选择器类型
    switch(selector_first){
      case '.':
        selector_type = 'className'
        selector_last = selector.slice(1)//'tit'
        break
      case '#':
        selector_type = 'id'
        selector_last = selector.slice(1)//'tit'
        break
      default:
        selector_type = 'tagName'
        selector_last = selector.toUpperCase()//'EM'
    }
    // if (target.tagName === selector.toUpperCase()){
    //   callback()
    // }
    // 判断点击元素是否为你希望触发事件的元素
    if (target[selector_type] === selector_last){
      callback.call(target,e)
    }
  })
}

// 获取某个元素到最外层左侧/顶部的距离
function offset(dom,bool){
  var l = 0
  var t = 0
  var domBDL = dom.clientLeft
  var domBDT = dom.clientTop
  while(dom){
    l += dom.clientLeft+dom.offsetLeft
    t += dom.clientTop+dom.offsetTop
    dom = dom.offsetParent
  }
  // return [l,t]
  if (bool) {// 带自身边框
    return {left: l,top: t}
  } else {// 不带自身边框
    return {left: l-domBDL,top: t-domBDT}
  }
}

function $1(selector){
  return document.querySelector(selector)
}
function $2(selector){
  return document.querySelectorAll(selector)
}
