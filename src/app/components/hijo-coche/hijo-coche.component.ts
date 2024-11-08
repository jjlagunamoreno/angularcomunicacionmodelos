import { Component, Input } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijo-coche',
  templateUrl: './hijo-coche.component.html',
  styleUrl: './hijo-coche.component.css'
})
export class HijoCocheComponent {
  @Input() car!: Coche;
  public mensaje: string;
  constructor() {
    this.mensaje = "";
    this.car = new Coche("Pontiac", "Firebird", 220, 20, false);
  }
  comprobarEstado(): boolean {
    if (this.car.estado == false) {
      this.mensaje = "El coche está apagado";
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = "Coche encendido!!!";
      return true;
    }
  }
  encenderCoche(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }
  acelerarCoche(): void {
    if (this.comprobarEstado() == false) {
      alert("Donde vas??? que está apagado!!!");
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
  }
}

