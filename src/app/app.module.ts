import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { HomeComponent } from './modules/home/home.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    HighchartsChartModule,
    RouterModule
  ],
  bootstrap: [AppComponent],
  providers: [
    DashboardService
  ]
})
export class AppModule { }
