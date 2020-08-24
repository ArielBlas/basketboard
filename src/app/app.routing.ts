import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { JugadoresComponent } from './modules/jugadores/jugadores.component';
import { EstadisticasComponent } from './modules/estadisticas/estadisticas.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'jugadores', component: JugadoresComponent},
    {path: 'estadisticas', component: EstadisticasComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}