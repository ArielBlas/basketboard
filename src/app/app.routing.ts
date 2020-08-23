import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}