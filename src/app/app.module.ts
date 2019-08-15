import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.menu';
import { AppCreate } from './app.create';
import { AppDashboard } from './app.dashboard';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './app.api';
import { AppHome } from './app.home';

const AppRoutes: Routes = [
  {path: 'create', component: AppCreate},
  {path: 'dashboard', component: AppDashboard},
  {path: '', component: AppHome}
]


@NgModule({
  declarations: [
    AppComponent,
    AppCreate,
    AppDashboard,
    AppHome
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
