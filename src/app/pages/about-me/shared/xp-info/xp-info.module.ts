import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XpInfoComponent } from './xp-info.component';
import { TagModule } from 'src/app/components/tag/tag.module';



@NgModule({
  declarations: [
    XpInfoComponent
  ],
  imports: [
    CommonModule,
    TagModule
  ],
  exports: [
    XpInfoComponent
  ]
})
export class XpInfoModule { }
