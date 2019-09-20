import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/formularios/usuarios/usuarios.component';
import { PersonalComponent } from './components/formularios/personal/personal.component';
import { ProveedoresComponent } from './components/formularios/proveedores/proveedores.component';
import { ProyectosComponent } from './components/formularios/proyectos/proyectos.component';
import { OrdenesComponent } from './components/formularios/ordenes/ordenes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UsuariosComponent,
    PersonalComponent,
    ProveedoresComponent,
    ProyectosComponent,
    OrdenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
