import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TagModule } from 'src/app/components/shared/tag/tag.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
