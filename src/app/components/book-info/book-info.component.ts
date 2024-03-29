import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  @Input() book!: Book;
  isShowMore = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    if (!this.isShowMore) {
      this.isShowMore = true;
      document.body.style.overflow = 'hidden';
    } else {
      this.isShowMore = false;
      document.body.style.overflow = 'auto';    
    }
  }

}
