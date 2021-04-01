


function minimenu(){
    let menu = document.getElementById('mini-menu-list');
    let closeicon = document.getElementById('close-icon');
    let menu_icon = document.getElementById('menu-icon');
    if(menu.style.display === "none"){
        menu.style.display = "block";
        menu_icon.style.display = "none";  
        closeicon.style.display = "block" ;
    }else{
        menu.style.display = "none";
        menu_icon.style.display = "block";  
        closeicon.style.display = "none";
    }
}   