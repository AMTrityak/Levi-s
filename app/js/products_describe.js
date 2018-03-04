var current_intem = 1;

var items = [{
    name: "Ботинки Levi's",
    model: "Leather jax boots black",
    price: 1199,
    full_price: "3000 грн",
    season: "Зима",
    material_in: "Натуральный мех",
    material_out: "Натуральная кожа яка",
    sole: "Хорошая резина"
},{
    name: "Ботинки Levi's",
    model: "Leather jax boots brown",
    price: 2199,
    full_price: null,
    season: "Зима",
    material_in: "Натуральный мех",
    material_out: "Натуральная кожа яка",
    sole: "Очень хорошая резина"
},
{
    name: "Ботинки Levi's",
    model: "Leather jax boots black",
    price: 1198,
    full_price: "2000 грн",
    season: "Зима",
    material_in: "Натуральный мех",
    material_out: "Натуральная кожа яка",
    sole: "Хорошая резина"
},
{
    name: "Сапоги Levi's",
    model: "Leather jax boots red",
    price: 1199,
    full_price: "2900 грн",
    season: "Зима",
    material_in: "Натуральный мех яка",
    material_out: "Натуральная кожа яка",
    sole: "Самая лучшая резина"
},
{
    name: "Cапоги Levi's",
    model: "Leather jax boots black",
    price: 11949,
    full_price: null,
    season: "Зима",
    material_in: "Натуральный мех",
    material_out: "Натуральная кожа яка",
    sole: "Хорошая резина"
},
{
    name: "Ботинки Levi's",
    model: "Leather jax boots black",
    price: 11499,
    full_price: "22000 грн",
    season: "Зима",
    material_in: "Натуральный мех",
    material_out: "Натуральная кожа яка",
    sole: "Хорошая резина"
},
{
    name: "Ботинки Levi's",
    model: "Leather jax boots black",
    price: 1198,
    full_price: "2000 грн",
    season: "Зима",
    material_in: "Натуральный мех",
    material_out: "Натуральная кожа яка",
    sole: "Хорошая резина"
},
{
    name: "Ботинки Levi's",
    model: "Leather jax boots black",
    price: 1198,
    full_price: null,
    season: "Зима",
    material_in: "Натуральный мех",
    material_out: "Натуральная кожа яка",
    sole: "Хорошая резина"
}];

function setParametr(id){
    $('#product_details .name').html(items[id].name);
    $('#product_details .model').html(items[id].model);
    $('#product_details .price .p_value').html(items[id].price);
    $('#product_details .full_price').html(items[id].full_price);
    $('#product_details .season span').html(items[id].season);
    $('#product_details .material_in span').html(items[id].material_in);
    $('#product_details .material_out span').html(items[id].material_out);
    $('#product_details .sole span').html(items[id].sole);
}

$(document).on('click', '.models_items', function(){
    var id = $(this).attr('data-modelId');
    setParametr(id);
});

setParametr(0);