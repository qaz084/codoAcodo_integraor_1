
const precioPorNoche=20000;
const totaldias= document.getElementById("totalDias");
function calcularTotal(){
  let fechaLlegada=new Date( document.getElementById("fechaLlegada").value);

  let fechaSalida=new Date( document.getElementById("fechaSalida").value);

  if(fechaSalida>fechaLlegada){
   
    totaldias.classList.remove("text-danger");
    let cantDias=  fechaSalida.getTime()-fechaLlegada.getTime();
    cantDias= Math.round(cantDias / (1000 * 60 * 60 * 24));
    
    document.getElementById("costoTotalReserva").innerHTML="$ "+(cantDias*precioPorNoche);
    document.getElementById("totalDias").innerHTML="X "+cantDias+" noches";
  }else{
    
    totaldias.classList.add("text-danger");
    totaldias.innerHTML="Elige una fecha correcta ";
  }
  
}
