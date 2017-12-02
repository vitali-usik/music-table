import { Component, OnInit } from '@angular/core';
import { MusicDataService } from './services/music-data.service';
import { MusicData } from './models/music-data.model';
import { ActionTypes } from './const/action-types.const';
import { PaginationItemModel } from './models/pagination-item.model';
import { RequestBody } from './models/request-body.model';

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

  constructor(private musicDataService: MusicDataService) {}

  public ngOnInit(): void {
    this.requestBody = this.initRequestBody();
    this.getMusicTableData();
  }

  public doActionCallback($event): void {
    console.log('$event', $event);
    if ($event.eventType === ActionTypes.PAGINATION) {
      this.requestBody.pageNum = $event.index;
      this.getMusicTableData();
    }
  }

  private getMusicTableData(): void {
    const musicData = this.musicDataService.getMusicData(this.requestBody);
    this.data = musicData.data;
    this.paginationData = this.preparePaginationData(musicData.meta.pageCount);
  }

  private initRequestBody(): RequestBody {
    return {
      itemsPerPage: 10,
      pageNum: 1,
      author: '',
      genre: '',
      year: '',
      sortBy: ''
    };
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
}
