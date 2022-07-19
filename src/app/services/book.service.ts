import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Book {
  volumeInfo: {
    title: string,
    authors: string[],
    averageRating: number,
    description: string,
    imageLinks: {
      thumbnail: string
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) { }

  getBooks(searchValue: string): Observable<Book[]> {
    return this.http.get<{items: Book[]}>(`${this.bookUrl}?q=${searchValue}`).pipe(map((books: any) => {
      return books.items || [];
    }))      
  }
}
