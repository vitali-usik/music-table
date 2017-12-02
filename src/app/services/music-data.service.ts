import { Injectable } from '@angular/core';
import { MusicData } from '../models/music-data.model';

@Injectable()
export class MusicDataService {

  public data: MusicData[] = [
    {
      author: 'The Kingston Trio',
      song: 'Tom Dooley',
      genre: 'Folk',
      year: '1958'
    },
    {
      author: 'Led Zeppelin',
      song: 'Kashmir',
      genre: 'Rock',
      year: '1975'
    },
    {
      author: 'Miles Davis',
      song: 'Blue in green',
      genre: 'Jazz',
      year: '1959'
    },
    {
      author: 'Muddy Waters',
      song: 'Mannish Boy',
      genre: 'Blues',
      year: '1955'
    },
    {
      author: 'Imagine Dragons',
      song: 'Thunder',
      genre: 'Alternative',
      year: '2017'
    },
    {
      author: 'Angus & Julia Stone',
      song: 'A HeartBreak',
      genre: 'Alternative',
      year: '2014'
    },
    {
      author: 'Bring Me The Horizon',
      song: 'Happy Song',
      genre: 'Post Hardcore',
      year: '2015'
    },
    {
      author: 'August Burns Red',
      song: 'The Truth of Liar',
      genre: 'Heavy Metal',
      year: '2007'
    },
    {
      author: 'Bastille',
      song: 'Glory',
      genre: 'Alternative',
      year: '2016'
    },
    {
      author: 'Blink-182',
      song: 'Los Angeles',
      genre: 'Punk',
      year: '2016'
    },
    {
      author: 'Muddy',
      song: 'Mannish',
      genre: 'Blues',
      year: '1955'
    },
    {
      author: 'Imagine Dragons',
      song: 'Believer',
      genre: 'Alternative',
      year: '2017'
    },
    {
      author: 'Blink-182',
      song: 'San Diego',
      genre: 'Punk',
      year: '2016'
    },
    {
      author: 'Bring Me The Horizon',
      song: 'True Friends',
      genre: 'Post Hardcore',
      year: '2015'
    },
    {
      author: 'August Burns Red',
      song: 'Back Burner',
      genre: 'Heavy Metal',
      year: '2007'
    },
    {
      author: 'Bastille',
      song: 'Power',
      genre: 'Alternative',
      year: '2015'
    },
    {
      author: 'Lana Del Rey',
      song: 'Money Power Glory',
      genre: 'Alternative',
      year: '2014'
    },
    {
      author: 'Bring Me The Horizon',
      song: 'Throne',
      genre: 'Post Hardcore',
      year: '2015'
    },
    {
      author: 'Muddy',
      song: 'Mannish',
      genre: 'Blues',
      year: '1955'
    }
  ];

  public getMusicData(requestBody: any): MusicData[] {
    let firstItem = (requestBody.pageNum - 1) * requestBody.itemsPerPage;
    return this.data.slice(firstItem, firstItem + requestBody.itemsPerPage);
  }
}