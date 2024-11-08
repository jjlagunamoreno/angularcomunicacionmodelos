import { HomeComponent } from "./components/home/home.component";
import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { HijoCocheComponent } from "./components/hijo-coche/hijo-coche.component";
import { PadreCochesComponent } from "./components/padre-coches/padre-coches.component";
import { PadreDeportesComponent } from "./components/padre-deportes/padre-deportes.component";

//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR
//PARA LA NAVEGACIÓN DE RUTAS
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//NECESITAMOS UN ARRAY CON LAS RUTAS, DICHO ARRAY SERÁ DEL TIPO Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "catalogo", component: ListaproductosComponent },
    { path: "hijocoche", component: HijoCocheComponent },
    { path: "padrecoches", component: PadreCochesComponent },
    { path: "padredeportes", component: PadreDeportesComponent },
    // { path: "**", component: NotfoundComponent }//el último siempre será en notfound
]

//DESDE ESTA CLASE DEBEMOS EXPORTAR EL ARRAY DE RUTAS COMO PROVEEDOR
export const appRoutingProvider: any[] = [];
//LAS RUTAS EN SI MISMAS
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
