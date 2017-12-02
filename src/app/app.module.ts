import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MusicTableComponent } from './components/music-table.component/music-table.component';
import { MusicDataService } from './services/music-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MusicTableComponent
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
