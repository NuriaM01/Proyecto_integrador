import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiCabeceraComponent } from './componentes/home/mi-cabecera/mi-cabecera.component';
import { LogoAppComponent } from './componentes/home/logo-app/logo-app.component';
import { BannerComponent } from './componentes/home/banner/banner.component';
import { ExperienciaComponent } from './componentes/home/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/home/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/home/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/home/proyectos/proyectos.component';
import { EditCloseComponent } from './componentes/compartido/edit-close/edit-close.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, MiCabeceraComponent,
    LogoAppComponent, BannerComponent, ExperienciaComponent,
    EducacionComponent, HabilidadesComponent, ProyectosComponent,
    EditCloseComponent, LoginComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
