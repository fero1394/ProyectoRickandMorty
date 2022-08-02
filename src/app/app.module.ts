import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ComunicacionService } from './servicios/comunicacion.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CardComponent } from './componentes/card/card.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { ListaComponent } from './componentes/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    PrincipalComponent,
    NotFoundComponent,
    InformacionComponent,
    PersonajesComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ComunicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
