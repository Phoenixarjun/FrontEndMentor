const menuBtn = document.querySelector('#menu-bar');
const list = document.querySelector('ul');
const cover = document.querySelector('.cover')
const closeBtn = document.querySelector('#cancel-bar');
menuBtn.addEventListener('click',function(){
    list.classList.toggle('checked');
    cover.classList.toggle('checked');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';

});
closeBtn.addEventListener('click',function(){
    list.classList.toggle('release');
    cover.classList.toggle('release');
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})