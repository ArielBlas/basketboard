import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

const material = [
  MatButtonModule,
  MatSidenavModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
