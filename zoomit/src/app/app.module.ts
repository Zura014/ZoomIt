import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FiltrationComponent } from './filtration/filtration.component';
import { CategoriesComponent } from './categories/categories.component';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FiltrationComponent,
    CategoriesComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
