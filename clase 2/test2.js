var semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];	
var dia=prompt("ingrese dia");
if(dia==semana[5]){
	alert ("saturday");
}
else if (dia==semana[6]){
	alert("sunday");
}
		
var edad=prompt("ingrese edad");
if((edad>=18) && (dia==semana[5])){
	alert("partie");
}
else if(edad<=10){
	alert("kid");
}
else if((edad>=20)&&(edad<30)){
	alert("twenties");
}

for(var i=0;i<semana.length;i++){
	if(semana[i]==="lunes"){
		alert("garfield");
	}
	else if((semana[i]==="viernes")&&(edad>=18)){
		alert("more partie")
	}
}