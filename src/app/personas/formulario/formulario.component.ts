import { Component, ElementRef, EventEmitter, OnInit, output, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { AppComponent } from '../../app.component';
import { LoggingService } from '../../LoggingService.service';
import { PersonaService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[LoggingService]
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  //personaCreada = output<Persona>()
  //nombreInput: string='';
  //apellidoInput:string='';
  @ViewChild('nombreInput') nombreInput!:ElementRef;
  @ViewChild('apellidoInput') apellidoInput!:ElementRef;
  constructor(private logginService:LoggingService,
              private personaService: PersonaService
  ){
    this.personaService.saludar.subscribe(
      (indice:number)=> alert("El indice es: "+ indice)
    );
  }

  
  agregarPersona():void{
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
    this.personaService.personaAgregada(persona1)
  }
}
