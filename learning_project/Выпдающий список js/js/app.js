let timer;
            //! Открываем списки
function btnActive() {
document.querySelectorAll('.dropdown_togle').forEach(e =>{
    e.addEventListener('click', e => {
        const listNumber = e.currentTarget.dataset.path; // получаем data-path
        document.querySelectorAll('.dropdown_list').forEach(e => {

            const dQsList = document.querySelector(`[data-target=${listNumber}]`) //* Списки
            const dQsBtn = document.querySelector(`[data-path=${listNumber}]`) //* Кнопки
            //*___________________________________________________________________________________
            if (!dQsList.classList.contains('open')){ // Проверяем отсутствие класса open

                //? Чтобы закрывались списки, при открытии другого
                e.classList.remove('active_list');
                e.classList.remove('open');
                // e.classList.remove('active_btn');
                // e.classList.remove('open_btn');

                dQsList.classList.add('active_list'); // добавляем active_list с display block
                timer = setTimeout(() => { //? Чтобы кнопки работали, таймаут со значением 0 сработает после проверки на open
                    dQsList.classList.add('open'); // Добавляем open
                    dQsBtn.classList.add("active_btn")// Класс для подсветки активной кнопки
                    // dQsBtn.classList.add("open_btn")
                }, 0);
            }
            //! Закрываем
            if (dQsList.classList.contains('open')){
                clearTimeout(timer);
                dQsList.classList.remove('active_list'); // Удаляем класс закрвывая блок
                timer = setTimeout(() => { //? Чтобы кнопки работали независимо
                    dQsList.classList.remove('open');
                    dQsBtn.classList.remove('active_btn');
                    // dQsBtn.classList.remove('open_btn');
                }, 0);
            }

            //? Закрывает список при клике по списку или окну
            window.onclick = e => {
                if (e.target == dQsList || e.target == document.querySelector(`[data-path=${listNumber}]`)){ // При клике на список и кнопку, ничего не делаем
                    return
                }
                else{
                    dQsList.classList.remove('active_list');
                    dQsList.classList.remove('open');
                    // dQsBtn.classList.remove('active_btn')
                    // dQsBtn.classList.remove('open_btn')
                }
            }
        });
    });
});
};

window.onload = function active_item() {
    const onlBtn = document.querySelector("#path_www");
    const onlList = document.querySelector("#target_www");
    onlBtn.classList.add("active_btn")
    onlList.classList.add("open")
    onlList.classList.add("active_list")
    btnActive()
};


document.querySelector("#path_www").addEventListener('click', closeOne);
document.querySelector("#path_sss").addEventListener('click', closeTwo);
document.querySelector("#path_aaa").addEventListener('click', closeThree);

function closeOne (){
    document.querySelector("#path_sss").classList.remove('active_btn');
    document.querySelector("#path_aaa").classList.remove('active_btn');
};
function closeTwo (){
    document.querySelector("#path_www").classList.remove('active_btn');
    document.querySelector("#path_aaa").classList.remove('active_btn');
};
function closeThree (){
    document.querySelector("#path_sss").classList.remove('active_btn');
    document.querySelector("#path_www").classList.remove('active_btn');
};