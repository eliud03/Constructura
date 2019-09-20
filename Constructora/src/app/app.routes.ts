import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/formularios/usuarios/usuarios.component';
import { PersonalComponent } from './components/formularios/personal/personal.component';
import { ProveedoresComponent } from './components/formularios/proveedores/proveedores.component';
import { ProyectosComponent } from './components/formularios/proyectos/proyectos.component';
import { OrdenesComponent } from './components/formularios/ordenes/ordenes.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuariosComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'proveedor', component: ProveedoresComponent },
    { path: 'proyecto', component: ProyectosComponent },
    { path: 'orden', component: OrdenesComponent },
    { path: '**', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
