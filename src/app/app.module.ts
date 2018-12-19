import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Listagem1Component } from './listagem1/listagem1.component';
import { Listagem2Component } from './listagem2/listagem2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavComponent,
        FooterComponent,
        Listagem1Component,
        Listagem2Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
