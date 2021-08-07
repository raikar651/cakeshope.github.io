var nav_block=document.querySelector(".nav-items");
var nav_icon1=document.querySelector(".fa-times");
var nav_icon2=document.querySelector(".fa-bars");
function showMenu()
{
    nav_block.style.top="100%";
    nav_icon1.style.visibility="visible";
    nav_icon2.style.visibility="hidden";
    
}
function hideMenu()
{
    nav_block.style.top="-400%";
    nav_icon1.style.visibility="hidden";
    nav_icon2.style.visibility="visible";
    
}