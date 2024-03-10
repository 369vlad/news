"use strict"

let sec01Color1 = document.querySelector('#s01-color1');
let sec01Color2 = document.querySelector('#s01-color2');

function changeClass(element, classToRem) {
    element.classList.remove(classToRem);
    element.classList.add('text-white');
    element.classList.add('fw-semibold');
}

window.onresize = () => {
    if(window.screen.width < 1200) {
        sec01Color1.classList.add('link-dark');
        sec01Color2.classList.add('text-danger');        
        location.reload();
    }
    if(window.screen.width >= 1200) {    
        changeClass(sec01Color2 ,'link-dark');
        changeClass(sec01Color1 ,'text-danger');   
    }
    
}