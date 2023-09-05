import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HoneycombGridComponent } from './components/body/honeycomb-grid/honeycomb-grid.component';
import { HoneycombComponent } from './components/body/honeycomb-grid/honeycomb/honeycomb.component';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HeroBannerComponent,
    HoneycombGridComponent,
    HoneycombComponent,
    LoginComponent,
    SecureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
