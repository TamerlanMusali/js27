1
// С помощью каких методов мы можем получить контент в Jquery?
//text();html();val()

2
// Для чего нужен метод .text()
//Устанавливает или возвращает текстовое содержимое элемента

3
// Для чего нужен метод .html()
//Устанавливает или возвращает содержимое элементов(включая HTML)

4
// Для чего нужен метод .val()
//Устанавливает или возвращает значание полей формы

5
// Получите контент из элемента ниже c помощью .text()
$('.text').click(function(){
    $(this).text()
})

6
// Получите контент из элемента ниже c помощью .html()
$('.text2').click(function(){
    $(this).html()
})

7
// Получите контент из элемента ниже c помощью .val()
// <input type="text" class="text5">
$('.text5').click(function(){
    $(this).val()
})

8
// Поместите текст "New Text" в тег ниже с помощью .text() 
$('button').click(function(){
    $('.text3').text('New Text')
})

9
// Поместите текст "New Text" в тег ниже с помощью .html() 
$('button').click(function(){
    $('.text4').html('<div class="text4">New Text</div>')
})

10
// Поместите текст "New Text" в тег ниже с помощью .val()
// <input type="text" class="text6">
$('button').click(function(){
    $('.text6').val('New Text')
})

11
// Для чего нужен метод .attr()
//Для получения значения атрибута

12
// Установите атрибут title="text" для элемента ниже
$('button').click(function(){
    $('.te').href('title', 'text')
})

13
// Установите атрибут title="text" для элемента ниже
$('button').click(function(){
    $('.te2').attr('title', 'text')
})

14
// Измените атрибут title="text" на title="title" для элемента ниже
$('button').click(function(){
    $('.te3').attr('title', 'title')
})

15
// Установите атрибуты title="text" и class="text" для элемента ниже с помощью одного метода .attr()


16
// Добавьте первый тег div ниже внутрь в конец второго тега div с помощью метода .append()
// 1) <div class="child3"></div>
// 2) <div class="parent"></div>
$('button').click(function(){
    $('parent').append('child3')
})


17
// Добавьте первый тег div ниже внутрь в начало второго тега div с помощью метода .append()
// 1) <div class="child4"></div>
// 2) <div class="parent2"></div>
$('button').click(function(){
    $('parent2').prepend('child4')
})


18
// Добавьте первый тег div ниже до второго тега div с помощью метода .append()
// 1) <div class="child5"></div>
// 2) <div class="parent3"></div>
$('button').click(function(){
    $('child5').before('parent3')
})


19
// Добавьте первый тег div ниже после второго тега div с помощью метода .append()
// 1) <div class="child6"></div>
// 2) <div class="parent4"></div>
$('button').click(function(){
    $('child6').after('parent4')
})


20
// Удалите элемент ниже
$('button').click(function(){
    $('.child').remove()
})

21
// Очистите элемент ниже
$('button').click(function(){
    $('.child2').empty()
})