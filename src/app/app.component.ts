import { Component, OnInit } from '@angular/core';
import { MusicDataService } from './services/music-data.service';
import { MusicData } from './models/music-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public data: MusicData[];

  constructor(private musicDataService: MusicDataService) {}

  public ngOnInit(): void {
    let requestBody = {
      itemsPerPage: 10,
      pageNum: 2,
      author: '',
      genre: '',
      year: '',
      sortBy: ''
    };
    this.data = this.musicDataService.getMusicData(requestBody);
  }
}
