window.addEventListener('scroll', () => {
    if(window.scrollY > 50 ) {
        document.getElementById("menu_fixe").style.boxShadow = "0px 2px 10px rgb(161, 161, 161)";
        document.getElementById("menu_fixe").style.backgroundColor = "rgb(245, 245, 245)";

    }
    else{
        document.getElementById("menu_fixe").style.boxShadow = "none";
        document.getElementById("menu_fixe").style.backgroundColor = "white";
    }
});

