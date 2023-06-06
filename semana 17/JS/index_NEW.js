function openMenu(){
    document.getElementById("mainMenu").style.width="480px"; //vista celular
    document.getElementById("mainMenu").style.display="flex"; //vista celular
    document.getElementById("mainMenu").style.height="1000px"; //vista celular
    document.getElementById("openmenu").style.display="none"; //vista celular
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";
    document.getElementById("mainMenu").style.transition="0.9 all";
    window.location.reload();
}