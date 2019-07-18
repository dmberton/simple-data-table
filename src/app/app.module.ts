import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableScrollComponent } from './table-scroll/table-scroll.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { UrlManagerService } from './service/url-manager.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableScrollComponent,
    TablePagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UrlManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
