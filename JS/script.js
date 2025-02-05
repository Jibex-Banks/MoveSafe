const menu = document.querySelector('.menuBar');
const closeBar = document.querySelector('.xBar');
const Wbtn = document.querySelector('.Wbtn');

menu.onclick = function(){
const sideBar = document.querySelector('.sidebar');
    sideBar.style.display='flex';
}

closeBar.onclick = function () {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display='none'; 
}

Wbtn.onclick = function () {
    const Name = document.getElementById('name');
    const Email = document.getElementById('email');
    if (Name.value != "" && Email.value != "") {
        alert("Thank you!🤩, You've joined the waitlist");        
    } else {
        alert("Please fill in the form");
    }
}