var c1=Infinity;
var c2=Infinity;
var c3=Infinity;
var corredor1 = "";
var corredor2 ="";
var corredor3 = "";


function orden(marca,corredor){
  if (marca < c3) {
      if (marca < c1) {
          c3 = c2
          c2 = c1
          c1 = marca
          corredor3 = corredor2
          corredor2 = corredor1
          corredor1 = corredor
      }

      else{
          if (marca < c2) {
              c3 = c2
              c2 = marca
              corredor3 = corredor2
              corredor2 = corredor
          }

          else{
              c3 = marca
              corredor3 = corredor
          }
      }
  }
}

while(true){
var corredor = prompt("Nombre corredor");
if (corredor === "salir"){
  alert("Has salido.")
  break;
  
}
var marca= parseInt(prompt("Marca"));

orden1= orden(marca,corredor);
}

console.log(`El orden de los corredores es :${corredor1} < ${corredor2} < ${corredor3}`);
console.log(`La marca de los corredores es: ${c1} <${c2}<${c3}`);