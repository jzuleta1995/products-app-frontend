import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@core/auth/auth.component';
import { SignupComponent } from '@core/auth/signup.component';
import { HomeComponent } from '@core/components/home/home.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('@core/components/home.module').then((m) => m.HomeModule)
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
