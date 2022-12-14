const animItems = document.querySelectorAll('.anim');

if (animItems.length > 0){ // Проверяем наличие анимированных элементов
    window.addEventListener('scroll', animScroll);
    function animScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]; // Получаем элементы массива
            const animH = animItem.offsetHeight; // Получаем высоту
            const animOffset = offset(animItem).top; // Получаем позицию элемента относительно верха (функция offset)
            const animStart = 4; // Коэффициент момента старта анимации

            let animPoint = window.innerHeight - animH / animStart; // Момент старта анимации (высота окна - объект / коэффициент)

            if (animH > window.innerHeight) { // Если объект выше окна браузера
                animPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animOffset - animPoint) && pageYOffset < (animOffset + animH)) { // pageYOffset - кол-во проскроленный пикселей]
                animItem.classList.add('active');
            }else{
                if (!animItem.classList.contains('anim-hide')) {
                    animItem.classList.remove('active'); // Для повторной анимации объекта
                }
            }
        }
    }
    function offset(el) { // Даёт получить значения элемнта относительно страницы
        const rect = el.getBoundingClientRect()
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animScroll(); // Объявляем функцию на случай если объект в видимой части изначально
}