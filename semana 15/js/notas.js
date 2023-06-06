function limpiar(){
    document.getElementById("Nota").value="";
    document.getElementById("Nota2").value="";
    document.getElementById("Nota3").value="";
    document.getElementById("definitiva").value="";
}
//fincion para calcular nota definitiva
function promedio(){
    var n1=document.getElementById("Nota1").value;
    var n2=document.getElementById("Nota2").value;
    var n3=document.getElementById("Nota3").value;
    var definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    document.getElementById("Definitiva").value=definitiva.toFixed(2);

}