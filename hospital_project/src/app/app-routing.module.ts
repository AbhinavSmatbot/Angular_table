import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './gaurds/auth.guard';
const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'forget-password', component:ForgetPasswordComponent},
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'admin', 
   canActivate : [AuthGuard],
  loadChildren:()=> 
  import('./module/admin/admin.module').then((m)=> m.AdminModule),
  },
  { path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
