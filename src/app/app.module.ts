import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar para que aparezcan las rutas correctamente
import { routing, appRoutingProvider } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreCochesComponent } from './components/padre-coches/padre-coches.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    MenuComponent,
    HomeComponent,
    HijoCocheComponent,
    PadreCochesComponent,
    PadreDeportesComponent
  ],
  imports: [
    BrowserModule, routing, //importar para que aparezcan las rutas correctamente
    AppRoutingModule
  ],
  providers: [appRoutingProvider], //importar para que aparezcan las rutas correctamente '[appRoutingProvider]'
  bootstrap: [AppComponent]
})
export class AppModule { }
