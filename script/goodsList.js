$(function() {

    // 请求商品列表数据
    $.ajax({
        url: './data/goods.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        // 数据渲染
        success: function(json) {
            var domStr = ''
            $.each(json, function(index, item) {
                domStr += `
                <div class="goods">
                <a href="./item-1135.html"><img _src="${item.imgurl}" src="" class="layz" alt=""></a>
                <p>${item.price}</p>
                <h3>${item.title}</h3>
                <div class="gouwuche" data-id="${item.id}">加入购物车</div>
                <div ><a href="./cart.html">立即购买</a></div>
                </div>
                `
            })
            $('.main').html(domStr)

            // 懒加载
            var imgs = document.querySelectorAll('.goods img')

            function loadImg() {
                var scrollT = document.documentElement.scrollTop
                var windowHeight = document.documentElement.clientHeight
                    // 判断哪些图片进入可视区
                for (var i = 0, len = imgs.length; i < len; i++) {

                    if (offset(imgs[i]).top <= (scrollT + windowHeight)) {
                        imgs[i].src = imgs[i].getAttribute('_src')
                    }
                }
            }
            // 进入页面需要判断加载哪些图片
            loadImg()

            // 滚动条滚动时也要判断哪些图片需要加载
            window.onscroll = function() {
                loadImg()
            }
        }
    })



    // 点击加入购物车
    $('.main').on('click', '.goods div', function() {
        // 存储商品id和数量
        // "goods"=>"[{'id':'abc4','num':2},{'id':'abc2','num':1}]"
        var id = $(this).attr('data-id') //当前点击商品的id
        var goodsArr = [] //购物车数据的数组
        if (localStorage.getItem('goods')) {
            goodsArr = JSON.parse(localStorage.getItem('goods'))
        }
        // 标记购物车是否已有该商品
        var flag = false
            // 判断购物车是否已有该商品
        $.each(goodsArr, function(index, item) {
            if (item.id === id) { //购物车已该商品
                item.num++ //商品数量+1
                    flag = true
            }
        })
        if (!flag) {
            // push一个商品对象到goodsArr
            goodsArr.push({ "id": id, "num": 1 })
        }
        // 数据更新到本地存储
        localStorage.setItem('goods', JSON.stringify(goodsArr))
        alert('加入购物车成功！')
    })

})