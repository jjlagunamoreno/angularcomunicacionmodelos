import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrl: './listaproductos.component.css'
})
export class ListaproductosComponent {
  public producto: Producto;
  public productos: Array<Producto>;

  constructor() {
    this.producto = new Producto("Camiseta cruzi", "https://fpcomerciopiobaroja.com/laligadelartista/wp-content/uploads/sites/97/2024/04/13642c77-cfa7-4511-a5ca-bc0474a495fd-removebg-preview-420x420.png", 35);
    this.productos = [
      new Producto(
        "Nike Air Jordan",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Producto(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),
      new Producto(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Producto(
        "J-Hayber Olimpo",
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        60
      ),
      new Producto(
        "Triple S Balenciaga",
        "https://cdn1.jolicloset.com/imgr/full/2024/05/1321192-1/plastico-zapatillas-balenciaga-triple-s-de-poliuretano-blanco-amarillo.jpg",
        650
      )
    ]
  }
}