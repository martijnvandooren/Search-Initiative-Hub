import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
import { VotingService } from './services/get-votings.service';
import { RightColomnComponent } from './components/body/right-colomn/right-colomn.component';
import { SharedService } from './services/shared.service';
import { GadgetComponent } from './components/gadgets/gadgets.component';
import { CommunityMembersGagdetComponent } from './components/gadgets/community-members-gagdet/community-members-gagdet.component';
import { TopVotingsGagdetComponent } from './components/gadgets/top-votings-gagdet/top-votings-gagdet.component';
import { FinanceStatusGagdetComponent } from './components/gadgets/finance-status-gagdet/finance-status-gagdet.component';

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
    RightColomnComponent,
    GadgetComponent,
    CommunityMembersGagdetComponent,
    TopVotingsGagdetComponent,
    FinanceStatusGagdetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    VotingService,
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
