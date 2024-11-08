import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;
  //TENDREMOS UN METODO PARA PODER SELECCIONAR UN FAVORITO
  //Y DIBUJARLO
  seleccionarFavoritoPadre(event: any): void {
    this.mensaje = "Deporte favorito: " + event;
    console.log("Dato: " + event);
  }
  constructor() {
    this.deportes = ["Petanca", "Curling", "Futbol", "Dados"]
  }
}