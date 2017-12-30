import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainHeaderComponent } from './main-header/main-header.component';


@NgModule({
  declarations: [
    AppComponent,
    RightSidebarComponent,
    MainContentComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
