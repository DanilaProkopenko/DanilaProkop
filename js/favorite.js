var cart = {}; // корзина

function init() {
    //вычитуем файл goods.json
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    //вывод на страницу
    //var goods = JSON.parse(data);
    console.log(data);
    var out='';
    var later = {};
    if (localStorage.getItem('later')) {
        // если есть - расширфровываю и записываю в переменную cart
        later = JSON.parse(localStorage.getItem('later'));
    for (var key in data){
        out += `<div class="cart">`;
        out += `<img src="img/${data[key].img}" class="someImage">`;
        out += `<p>${data[key].name}</p>`;
        out += `<button class="add-to-cart" data-id="${key}">купить</button>`;
        out += `</div>`;
    }
        $('.goods-out').html(out)
    else {
        $('.goods-out').html("добавьте товар")

    } 
}


$(document).ready(function () {
    init();
});
