import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  templateUrl: './hijo-deporte.component.html',
  styleUrl: './hijo-deporte.component.css'
})
export class HijoDeporteComponent {
  // DECORADOR @Input()
  // ESTE DECORADOR SE UTILIZA PARA RECIBIR DATOS DESDE EL COMPONENTE PADRE HACIA ESTE COMPONENTE HIJO.
  // EN ESTE CASO, SE RECIBE UN STRING LLAMADO 'sport', QUE REPRESENTA EL NOMBRE DE UN DEPORTE.
  // EL COMPONENTE PADRE PASARÁ EL VALOR DE 'sport' AL RENDERIZAR EL COMPONENTE HIJO.
  @Input() sport!: string;

  // DECORADOR @Output()
  // ESTE DECORADOR SE UTILIZA PARA ENVIAR EVENTOS DESDE EL COMPONENTE HIJO HACIA EL COMPONENTE PADRE.
  // 'seleccionarFavoritoPadre' ES UNA INSTANCIA DE EventEmitter, QUE PERMITE LA COMUNICACIÓN ENTRE AMBOS COMPONENTES.
  // CUANDO EL COMPONENTE HIJO QUIERA ENVIAR INFORMACIÓN AL PADRE, LLAMARÁ AL MÉTODO 'emit()' SOBRE ESTE EMISOR.
  @Output() seleccionarFavoritoPadre: EventEmitter<any> =
    new EventEmitter();

  seleccionarFavoritoHijo(): void {
    //REALIZAMOS LA LLAMADA AL MÉTODO PARENT
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
