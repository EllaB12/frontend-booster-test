import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books!: Book[];

  constructor() { }

  ngOnInit(): void {
  }

}
