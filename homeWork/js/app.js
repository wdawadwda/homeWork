const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal');
const btn = document.querySelector('#btn');
const img = document.querySelector('#img');

btn.addEventListener('click', openImg);

function openImg(){
    overlay.style.display = 'block'
    modal.style.display = 'block'
    img.style.display = 'block'
};

overlay.addEventListener('click', closeImg)

function closeImg() {
    overlay.style.display = 'none'
    modal.style.display = 'none'
    img.style.display = 'none'
};