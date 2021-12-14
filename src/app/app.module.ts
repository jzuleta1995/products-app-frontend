import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { ItemSidebarComponent } from '@layout/item-sidebar/item-sidebar.component';
import { AuthComponent } from './core/auth/auth.component';
import { SharedModule } from '@shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { HomeComponent } from './core/components/home/home.component';
import { SignupComponent } from './core/auth/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ItemSidebarComponent,
    AuthComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
