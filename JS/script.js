const menu = document.querySelector('.menuBar');
const closeBar = document.querySelector('.xBar');

menu.onclick = function(){
const sideBar = document.querySelector('.sidebar');
    sideBar.style.display='flex';
}

closeBar.onclick = function () {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display='none'; 
}