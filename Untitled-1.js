var inicio_curso=prompt("Introduce fecha de inicio  de la unidad fromativa del modulo 6 con este formato dd/mm/aaaa");
var fin_curso=prompt("Introduce fecha de fin de la unidad fromativa del modulo 6 dd/mm/aaaa");

//Saber las horas de cada dia
var horasDia=["","","","",""];
var diasSemana2=["Lunes","Martes","Miercoles","Jueves","Viernes"];
var y=0;
document.write("<strong>Horario de la asignatura:</strong><br></br>");
var resultado=0;
var tabla=("<table><tbody>");

for (var i=0; i<=4; i++){
	horasDia[i]=prompt("Cuantas horas haces del modulo 6 el "+diasSemana2[y]);
	var numero=parseInt(horasDia[y]);
	resultado=resultado+numero;
	//document.write("El "+diasSemana2[y]+": "+horasDia[i]+" horas.");
	tabla+=("<tr><td>"+diasSemana2[y]+": </td>		<td>"+horasDia[i]+" horas.</td></tr>")
	y++;
	if(i==4){
		//document.write("Total:"+resultado+" horas a la semana");	
		tabla+=("<br><td>Total: 		"+resultado+" horas a la semana.</td>")
	}
	
}
tabla+=("</tbody></table>");
document.write(tabla);
//final ejercicio 5

//arrays de los meses y dias de la semana
var diasSemana2=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

//sacar dia mes y año inicio
var dia=inicio_curso.slice(0, -8);
var mes=inicio_curso.slice(3, -5);
var ano=inicio_curso.slice(6);
var fecha = new Date(ano,mes,dia);

//sacar dia mes y año final
var dia2=fin_curso.slice(0, -8);
var mes2=fin_curso.slice(3, -5);
var ano2=fin_curso.slice(6);
var fecha2 = new Date(ano2,mes2,dia2);

document.write("La fecha de inicio de la UF es: <strong>"+diasSemana2[fecha.getDay()]+" "+fecha.getDay()+" de "+meses[fecha.getMonth()]+" de "+ano+"<br></strong>");
document.write("La fecha de finalizacion de la UF es: <strong>"+diasSemana2[fecha2.getDay()]+" "+fecha2.getDay()+" de "+meses[fecha2.getMonth()]+" de "+ano+"<br></strong>");
var ano_final=(ano-ano2)*225;
var mes_final=(mes-mes2)*28;
var dia_final=(dia-dia2);
var total_dias=ano_final+mes_final+dia_final;
var fecha_final=total_dias/5;
var final_horas_UF=resultado*fecha_final;	
document.write("El número de horas que se impartirán en la UF es de "+final_horas_UF+".");

