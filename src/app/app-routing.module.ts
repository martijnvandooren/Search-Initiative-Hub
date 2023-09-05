import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {
  path: 'login', component: LoginComponent
}, { 
  path: 'secure', component: SecureComponent
}, {
  path: '', component: BodyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
