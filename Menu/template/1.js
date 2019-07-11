document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementsByClassName('nut');
    var menu = document.getElementsByClassName('menu');
    var xam = document.getElementsByClassName('xam');
    var khoito = document.getElementsByClassName('khoito');
    
        nut[0].onclick = function(){
            //  menu[0].classList.toggle('ra');
            xam[0].classList.toggle('hien');
            khoito[0].classList.toggle('ra1');
        }
        xam[0].onclick = function(){
            //  menu[0].classList.remove('ra');
            xam[0].classList.remove('hien');
            khoito[0].classList.remove('ra1');
         }
    
},false)
 