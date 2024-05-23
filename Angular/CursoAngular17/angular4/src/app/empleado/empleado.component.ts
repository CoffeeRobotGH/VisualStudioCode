import { Component } from "@angular/core";

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'Titulo del componente empleado';

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any> = ['Carpintero', 44, 'Fontanero'];
    comodin:any = `Cualquier Cosa ${123}`;

    constructor(){
        this.nombre = 'Emanuel Paredes';
        this.edad = 19;
        this.mayorDeEdad = true;
        this.comodin = "YES";
    }

    ngOnInit() {
        this.cambiarNombre();
        this.cambiarEdad();
        console.log(this.nombre + " " + this.edad);

        // Variables y alcanze
        var uno = 8;
        var dos = 15;

        if (uno === 8) {
            let uno = 3;
            var dos = 88;

            console.log("DENTRO DEL IF: " +uno+ " " +dos);
        }

        console.log("FUERA DEL IF: " +uno+ " " +dos);
    }

    cambiarNombre() {
        this.nombre = 'Emanuel Sokorov';
    }

    cambiarEdad() {
        this.edad = 20;
    }
}