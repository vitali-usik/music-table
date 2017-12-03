import { Component, OnInit } from '@angular/core';
import { MusicDataService } from './services/music-data.service';
import { MusicData } from './models/music-data.model';
import { ActionTypes } from './const/action-types.const';
import { PaginationItemModel } from './models/pagination-item.model';
import { RequestBody } from './models/request-body.model';
import { ItemCount } from './models/item-count.model';
import { LocalStorageService } from './services/local-storage.service';
import { LocalStorageItems } from './const/local-storage-items.const';

const ITEMS_PER_PAGE: number[] = [5, 10, 15, 20, 30];
const DEFAULT_ITEMS_PER_PAGE: number = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public data: MusicData[];
  public paginationData: PaginationItemModel[];
  public requestBody: RequestBody;
  public itemCount: ItemCount[];

  constructor(private musicDataService: MusicDataService, private localStorageService: LocalStorageService) {}

  public ngOnInit(): void {
    this.requestBody = this.initRequestBody();
    this.getMusicTableData();
  }

  public doActionCallback($event): void {
    console.log('$event', $event);
    if ($event.eventType === ActionTypes.PAGINATION) {
      this.requestBody.pageNum = $event.index;
      this.getMusicTableData();
    } else if ($event.eventType === ActionTypes.ITEMS_COUNT_CHANGE) {
      this.requestBody.pageNum = 1;
      this.requestBody.itemsPerPage = $event.itemsPerPage;
      this.localStorageService.setItem(LocalStorageItems.ITEMS_PER_PAGE, this.requestBody.itemsPerPage);
      this.getMusicTableData();
    }
  }

  private getMusicTableData(): void {
    const musicData = this.musicDataService.getMusicData(this.requestBody);
    this.data = musicData.data;
    this.paginationData = this.preparePaginationData(musicData.meta.pageCount);
    this.itemCount = this.prepareItemCountData(musicData.meta.itemsPerPage);
  }

  private initRequestBody(): RequestBody {
    return {
      itemsPerPage: this.getItemsPerPage(),
      pageNum: 1,
      author: '',
      genre: '',
      year: '',
      sortBy: ''
    };
  }

  private getItemsPerPage(): number {
    let itemsPerPage = +this.localStorageService.getItem(LocalStorageItems.ITEMS_PER_PAGE);

    if (!itemsPerPage) {
      itemsPerPage = DEFAULT_ITEMS_PER_PAGE;
      this.localStorageService.setItem(LocalStorageItems.ITEMS_PER_PAGE, itemsPerPage);
    }
    return itemsPerPage;
  }

  private preparePaginationData(pageCount: number): PaginationItemModel[] {
    let paginationData = [];

    for (let i = 0; i < pageCount; i++) {
      paginationData.push({
        page: i + 1,
        isActive: this.requestBody.pageNum === (i + 1)
      });
    }

    return paginationData;
  }

  private prepareItemCountData(itemsPerPage: number): ItemCount[] {
    return ITEMS_PER_PAGE.map((item) => {
      return {
        items: item,
        isActive: item === itemsPerPage
      }
    })
  }
}
