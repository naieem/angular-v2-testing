import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
@NgModule({
  imports: [CommonModule],
  declarations: [LeftSidebarComponent],
  exports: [LeftSidebarComponent]
})
export class SharedModule {}
