const menuBtn = document.querySelector('#menu-bar');
let ctr = 0;
const clsBtn = document.querySelector('#cancel-bar');
const list = document.querySelector('ul');
const cover = document.querySelector('.cover');
const closeBtn = document.querySelector('.naresh');
// menuBtn.addEventListener('click',function(){
//     list.classList.toggle('checked');
//     cover.classList.toggle('checked');
//     menuBtn.style.display = 'none';
//     closeBtn.style.display = 'block';

// });
closeBtn.addEventListener('click',function(){

    console.log("clicked");
    if(ctr%2==0){
        list.classList.toggle('checked');
        cover.classList.toggle('checked');
        menuBtn.style.display = 'none';
        clsBtn.style.display = 'block';
    }
    else{
        list.classList.toggle('release');
        cover.classList.toggle('release');
        menuBtn.style.display = 'block';
        clsBtn.style.display = 'none';
    }
    ctr+=1;





})