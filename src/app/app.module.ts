import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MusicTableComponent } from './components/music-table.component/music-table.component';
import { MusicDataService } from './services/music-data.service';
import { PaginationComponent } from './components/pagination.component/pagination.component';
import { ItemCountComponent } from './components/item-count.component/item-count.component';
import { LocalStorageService } from './services/local-storage.service';
import { FiltersComponent } from './components/filters.component/filters.component';
import { FilterItemComponent } from './components/filter-item.component/filter-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicTableComponent,
    PaginationComponent,
    ItemCountComponent,
    FiltersComponent,
    FilterItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MusicDataService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
