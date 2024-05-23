import { Component } from "@angular/core";
import { Empleados } from "./empleados";

@Component({
    selector: 'empleados-tag',
    templateUrl: './empleados.component.html'
})

export class EmpleadosComponent{
    public titulo = 'Componente Empleados:';

    public empleados:Empleados;
    public trabajadores:Array<Empleados>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor() {
        this.empleados = new Empleados('Emanuel Paredes', 19, 'Cocinero', true);
        this.trabajadores = [
            new Empleados('Manolo Martinez', 35, 'Administrativo', true),
            new Empleados('Ana Lopez', 25, 'Cocinera', true),
            new Empleados('Víctor Robles', 66, 'Programador', false),
        ];

        this.trabajador_externo = true;
        this.color = 'red';
        this.color_seleccionado = '#ccc';
    }

    ngOnInit() {
        console.log(this.empleados);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor) {
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}