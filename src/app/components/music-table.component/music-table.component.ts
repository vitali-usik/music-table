import { Component, Input } from '@angular/core';
import { MusicData } from '../../models/music-data.model';

@Component({
  selector: 'mt-music-table',
  templateUrl: './music-table.component.html',
  styleUrls: ['./music-table.component.css']
})
export class MusicTableComponent {

  @Input() public data: MusicData[];
}