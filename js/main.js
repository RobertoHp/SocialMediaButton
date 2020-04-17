const floatButton = document.getElementById('float-button');
const openMain = document.getElementById('open-social-bar');
const closeMain = document.getElementById('close-social-bar');
const buttonFloat = document.getElementById('open-media-button');
const barFloat = document.getElementById('social-media');

openMain.addEventListener('click', ()=>{
    showHiddeCloseMain();
    showHiddeIcons();
});

closeMain.addEventListener('click', ()=>{
    showHiddeCloseMain();
    showHiddeIcons();
});

function showHiddeCloseMain(){
    floatButton.classList.toggle('float-button-bar');
    floatButton.style.transition = 'width 0.3s ease';
}

function showHiddeIcons(){
    buttonFloat.classList.toggle('button-main');
    barFloat.classList.toggle('bar-main');
}