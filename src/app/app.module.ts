import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HoneycombGridComponent } from './components/body/honeycomb-grid/honeycomb-grid.component';
import { HoneycombComponent } from './components/body/honeycomb-grid/honeycomb/honeycomb.component';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure.component';
import { JoinCardsComponent } from './components/body/join-cards/join-cards.component';
import { VotingComponent } from './components/secure/voting/voting.component';

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
    JoinCardsComponent,
    VotingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
