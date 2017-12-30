import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { MainHeaderComponent } from './main-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainContentComponent, MainHeaderComponent],
  exports: [MainContentComponent, MainHeaderComponent]
})
export class MainContentModule {}
