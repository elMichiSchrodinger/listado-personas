import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService{
    personas: Persona[] = [new Persona('Juan','Perez'),new Persona('Laura','Juarez'),new Persona('Karla','Lara')];
    saludar = new EventEmitter<number>();
    constructor(private logginService:LoggingService){}
    personaAgregada(persona:Persona){
        this.personas.push(persona);
        this.logginService.enviaMensajeConsola("Agregamos a persona con nombre: "+persona.nombre+" y apellido: "+persona.apellido)
    }
}