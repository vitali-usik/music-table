import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MusicTableComponent } from './components/music-table.component/music-table.component';
import { MusicDataService } from './services/music-data.service';
import { PaginationComponent } from './components/pagination.component/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MusicDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
