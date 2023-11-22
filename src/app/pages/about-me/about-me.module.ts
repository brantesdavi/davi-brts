import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { TagModule } from 'src/app/components/tag/tag.module';
import { XpInfoModule } from './shared/xp-info/xp-info.module';
@NgModule({
  declarations: [
    AboutMeComponent
  ],
  exports: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    XpInfoModule
  ]
})
export class AboutMeModule { }
