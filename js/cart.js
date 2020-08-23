var cart = {};
function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
        }
    else {
        $('.main-cart').html('У вас нет товаров в корзине.');
    }
}

function showCart() {
    //вывод корзины
    if (!isEmpty(cart)) {
        $('.main-cart').html('У вас нет товаров в корзине.');
    }
    else {
        $.getJSON('goods.json', function (data) {
            var goods = data;
            var out = '';
            for (var id in cart) {
                //out += `  <button data-id="${id}" class="del-goods">x</button>  `;
                //out += `<img src="img/${goods[id].img}">`;//
                //out += `  ${goods[id].name  }`;//
                //out += `<button data-id="${id}" class="minus-goods">-</button>  `;
                //out += `  ${cart[id]  }`;
                //out += `  <button data-id="${id}" class="plus-goods">+</button>  `;
                //out += cart[id]*goods[id].cost;//
                //out += '<br>';
                out +=  `<div class="product">`;
                out +=      `<div class="flex_product">`;
                out +=          `<div class="image_product">`;
                out +=              `<img src="img/${goods[id].img}" class="image_product">`;
                out +=          `</div>`;
                out +=           `<div class="all_group">`;
                out +=              `<div class="group_name">`;
                out +=                  `<div class="name_thing">Картина</div>`;
                out +=                  `<div class="name_plus_col">`;
                out +=                     `<div clas="name_product">`;
                out +=                          `${goods[id].name}`;
                out +=                      `</div>`;
                out +=                     `<div class="number_product">`;
                out +=                     `Количество:      `;
                out +=                      `<button data-id="${id}" class="minus-goods">-</button>`;
                out +=                         ` ${cart[id]}`;
                out +=                      `<button data-id="${id}" class="plus-goods">+</button>`;
                out +=                      `</div>`;
                out +=                  `</div>`;
                out +=              `</div>`;
                out +=              `<div class="line">`;
                out +=                  `<hr>`;
                out +=              `</div>`;
                out +=              `<div class="niz">`;
                out +=                  `<div class="button_two">`;
                out +=                      `<div class="favorite">`;
                out +=                          `<button>В избранное</button>`;
                out +=                      `</div>`;
                out +=                      `<div class="delete">`;
                out +=                          `<button data-id="${id}" class="del-goods">удалить</button>`;
                out +=                      `</div>`;
                out +=                  `</div>`;
                out +=                  `<div class="cost">`;
                out +=                      `Итого:  `;
                out +=                      cart[id]*goods[id].cost;
                out +=                  `</div>`;
                out +=              `</div>`;
                out +=          `</div>`;
                out +=      `</div>`;
                out +=  `</div>`;

            }
            $('.main-cart').html(out);
            $('.del-goods').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);
        });
    }
}

function delGoods() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}
function plusGoods() {
    //добавляет товар в корзине
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}
function minusGoods() {
    //уменьшаем товар в корзине
    var id = $(this).attr('data-id');
    if (cart[id]==1) {
        delete cart[id];
    }
    else {
        cart[id]--;
    }
    saveCart();
    showCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}

function sendEmail() {
    var ename = $('#ename').val();
    var email = $('#email').val();
    var ephone = $('#ephone').val();
    if (ename!='' && email!='' && ephone!='') {
        if (isEmpty(cart)) {
            $.post(
                "core/mail.php",
                {
                    "ename" : ename,
                    "email" : email,
                    "ephone" : ephone,
                    "cart" : cart
                },
                function(data){
                    if (data==1) {
                        alert('Заказ отправлен');
                    }
                    else {
                        alert('Повторите заказ');
                    }
                }
            );
        }
        else {
            alert('Корзина пуста');
        }
    }
    else {
        alert('Заполните поля');
    }

}


$(document).ready(function () {
   loadCart();
   $('.send-email').on('click', sendEmail); // отправить письмо с заказом
});