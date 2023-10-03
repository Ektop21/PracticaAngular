import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[

    new Empleado("Hector","Fuentes","programador",16000),
    new Empleado("Alisson","Ruiz","CEO",73500),
    new Empleado("Alejandro","Jimenez","Economista",16000),
    new Empleado("Kira","Firu","Jefa de departamento",7500),

  ];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);

  }

  arrayCaracteristicas = [''];


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;



}
