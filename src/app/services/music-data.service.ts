import { Injectable } from '@angular/core';
import { MusicData } from '../models/music-data.model';
import { FilterTypes } from '../const/filter-types.const';

const ALL = 'Все';

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
      author: 'Guano Apes',
      song: 'Open Your Eyes',
      genre: 'Rock',
      year: '1999'
    },
    {
      author: 'Guano Apes',
      song: 'Lord of the Boards',
      genre: 'Rock',
      year: '1999'
    },
    {
      author: 'Guano Apes',
      song: 'Lose Yourself',
      genre: 'Rock',
      year: '2017'
    },
    {
      author: 'John Coffee',
      song: 'Broke Neck',
      genre: 'Rock',
      year: '2015'
    },
    {
      author: 'John Coffee',
      song: 'Redrum',
      genre: 'Rock',
      year: '2015'
    },
    {
      author: 'John Coffee',
      song: 'Son',
      genre: 'Rock',
      year: '2015'
    },
    {
      author: 'Lisa LeBlanc',
      song: 'Ti-gars',
      genre: 'Alternative',
      year: '2016'
    },
    {
      author: 'Lisa LeBlanc',
      song: '5748 km',
      genre: 'Alternative',
      year: '2016'
    },
    {
      author: 'Lisa LeBlanc',
      song: 'Ace of Spades',
      genre: 'Alternative',
      year: '2016'
    },
    {
      author: 'Lisa LeBlanc',
      song: 'En cher',
      genre: 'Alternative',
      year: '2016'
    },
    {
      author: 'Lisa LeBlanc',
      song: 'Dad man\'s flats',
      genre: 'Alternative',
      year: '2016'
    },
    {
      author: 'Muddy',
      song: 'Mannish',
      genre: 'Blues',
      year: '1955'
    }
  ];

  public getMusicData(requestBody: any): any {
    let filteredData: MusicData[] = this.data;
    let firstItem = (requestBody.pageNum - 1) * requestBody.itemsPerPage;

    if (requestBody.author) {
      filteredData = requestBody.author === ALL ? filteredData : this.filterByAuthor(filteredData, requestBody.author);
    }

    if (requestBody.genre) {
      filteredData = requestBody.genre === ALL ? filteredData : this.filterByGenre(filteredData, requestBody.genre)
    }

    if (requestBody.year) {
      filteredData = requestBody.year === ALL ? filteredData : this.filterByYear(filteredData, requestBody.year)
    }

    return {
      data: filteredData.slice(firstItem, firstItem + requestBody.itemsPerPage),
      meta: {
        itemsPerPage: requestBody.itemsPerPage,
        pageNum: requestBody.pageNum,
        pageCount: Math.ceil(filteredData.length / requestBody.itemsPerPage)
      }
    }
  }

  public getFilters() {
    return [
      this.getAuthors(),
      this.getGenres(),
      this.getYears()
    ]
  }

  private getAuthors(): any {
    let authors = [ALL];

    this.data.forEach((item) => {
      if (authors.indexOf(item.author) === -1) {
        authors.push(item.author);
      }
    });

    return {
      type: FilterTypes.AUTHOR,
      filterItems: authors
    };
  }

  private getGenres(): any {
    let genres = [ALL];

    this.data.forEach((item) => {
      if (genres.indexOf(item.genre) === -1) {
        genres.push(item.genre);
      }
    });

    return {
      type: FilterTypes.GENRE,
      filterItems: genres
    };
  }

  private getYears(): any {
    let years = [ALL];

    this.data.forEach((item) => {
      if (years.indexOf(item.year) === -1) {
        years.push(item.year);
      }
    });

    return {
      type: FilterTypes.YEAR,
      filterItems: years
    };
  }

  private filterByAuthor(filteredData: MusicData[], author: string): MusicData[] {
    return filteredData.filter((item) => {
      return item.author === author;
    });
  }

  private filterByGenre(filteredData: MusicData[], genre: string): MusicData[] {
    return filteredData.filter((item) => {
      return item.genre === genre;
    });
  }

  private filterByYear(filteredData: MusicData[], year: string): MusicData[] {
    return filteredData.filter((item) => {
      return item.year === year;
    });
  }
}