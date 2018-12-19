import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Listagem1Component } from './listagem1/listagem1.component';
import { Listagem2Component } from './listagem2/listagem2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    Listagem1Component,
    Listagem2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
