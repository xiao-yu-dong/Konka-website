$(function() {
    if (localStorage.getItem('goods')) {
        // 获取购物车数据
        var goodsArr = JSON.parse(localStorage.getItem('goods'))
            // 获取所有数据
        $.ajax({
            url: './data/goods.json',
            type: 'get',
            dataType: 'json',
            success: function(json) {
                var domStr = ''
                $.each(json, function(index, item) {
                    $.each(goodsArr, function(i, obj) {
                        if (item.id === obj.id) {
                            domStr += `
                            <li>
                                <input type="checkbox" class="checks">
                                <img class="oper" src="${item.imgurl}" alt="">
                                <h3>${item.title}</h3>
                                <p class="price">${item.price}</p>
                                <input type="button" value="-" class="J_jian"/>
					            <input type="text" class="num" value="1"/>
					            <input type="button"  value="+" class="J_jia"/>
                                <span class="price2">￥${item.price}</span>
                                <em data-id="${item.id}">删除</em>
                            </li>
                            `
                        }
                    })
                })
                $('.list').html(domStr)
            }
        })

        // 删除商品
        $('.list').on('click', 'li em', function() {
            // 当前点击的商品id
            var id = $(this).attr('data-id')
            $.each(goodsArr, function(index, item) {
                    if (item.id === id) {
                        goodsArr.splice(index, 1)
                        return false
                    }
                })
                // 删除dom结构
            $(this).parent().remove()
                // 更新本地存储的数据
            localStorage.setItem('goods', JSON.stringify(goodsArr))
            if (goodsArr.length <= 0) {
                localStorage.removeItem('goods')
                var newLi = '<li>购物车暂无数据！<a href="./list.html">马上去购物 ! ! !</a></li>'
                $('.list').html(newLi)
            }
        })

        //全选按钮
        $('.allCheck').click(function() {
                if ($(this).prop('checked')) {
                    $('.checks').prop('checked', true)
                } else {
                    $('.checks').prop('checked', false)
                }
            })
            //
        $('.list').on('click', '.checks', function() {
            $.each($('.checks'), function(index, item) {
                if (!$(this).prop('checked')) {
                    $('.allCheck').prop('checked', false)
                    return false
                }
                $('.allCheck').prop('checked', true)
            })

        })

        //加---减  数量
        //加
        $('.list').on('click', 'li .J_jia', function() {
                // console.log('li .J_jia');
                var txtObj = $(this).siblings("input[type='text']"); //获取输入框
                // console.log(txtObj);
                var number = parseInt(txtObj.val()) + 1;
                txtObj.val(number);
                // console.log(number);
                //计算单个商品价格
                calPrice.bind($(this), number)();
                //计算商品总价
                // calTotalPrice();
            })
            // 减
        $('.list').on('click', 'li .J_jian', function() {
            // console.log('li .J_jian');
            var txtObj = $(this).siblings("input[type='text']"); //获取输入框
            // console.log(txtObj);
            var number = parseInt(txtObj.val()) - 1; //-1

            if (number <= 1) {
                number = 1
            }
            txtObj.val(number);
            //计算单个商品价格
            calPrice.bind($(this), number)();
            //计算商品总价
            // calTotalPrice();

        })

        //参数$btnObj代表增减数量的按钮，number是商品的数量
        function calPrice(number) {
            var $tdObj = $(this).siblings('.price').text(); //获取显示商品单价的p
            var price = parseInt($tdObj); //从￥截取，获取单价
            var $tdTotal = $($tdObj).text(); //获取紧邻的同胞元素，即显示商品小计的单元格
            var total = price * number; //计算单个商品价格
            // console.log($tdObj);
            $(this).siblings('.price2').text('￥' + total + '.00')

            $($tdTotal).html(total.toFixed(2)); //商品小计保留小数点后两位
        }

        // // //计算商品列表中所有商品的总价
        // function calTotalPrice() {
        //     //保存总价
        //     var sum = 0;
        //     //遍历表格中title=‘price’属性的单元格
        //     $("td[title='price']").each(function(index, element) {
        //         sum += parseFloat($(this).text().substr(1)); //价格累加
        //     });
        //     //显示总价
        //     // $("#spanTotal").html(sum.toFixed(2));
        // }








    } else {
        var newLi = '<li>购物车暂无数据！<a href="./list.html">马上去购物 ! ! !</a></li>'
        $('.list').html(newLi)
    }
})