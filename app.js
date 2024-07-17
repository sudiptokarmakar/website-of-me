let icon =document.querySelector(".icon");
let move_block = document.querySelector(".by");
let slider = document.querySelector(".hi");
function widthChangeCallback() {
 if(window.innerWidth > 800) {

    document.querySelector(".nav-part2").style.display="flex";
    icon.style.display="none";
    move_block.style.display="none";

     } 
     else if(window.innerWidth < 800) {
        document.querySelector(".nav-part2").style.display="none";
        icon.style.display="block";
        toggle_this();
     }
     else{
        icon.style.display="none";
        move_block.style.display="none";
     }
  }
  function toggle_this(){
     icon.addEventListener("click", () => {
        slider.classList.toggle("slider");
        move_block.classList.toggle("nav_part3");
     })
   }
window.addEventListener('resize', widthChangeCallback);
widthChangeCallback();
//mine end
