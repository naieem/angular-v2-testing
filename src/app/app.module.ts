import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeftSidebarModule } from './module/left-sidebar/left-sidebar.module';
import { RightSidebarModule } from './module/right-sidebar/right-sidebar.module';
import { MainContentModule } from './module/main-content/main-content.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LeftSidebarModule,
    RightSidebarModule,
    MainContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
