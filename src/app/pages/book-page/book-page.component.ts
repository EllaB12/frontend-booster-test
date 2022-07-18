import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book, BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  books$!: Observable<Book[]>;
  bookForm!: FormGroup;

  constructor(private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._initForm();
  }

  search() {
    this.books$ = this.bookService.getBooks(this.searchValue.value);
  }

  private _initForm() {
    this.bookForm = this.fb.group({
      searchValue: this.fb.control(null, Validators.required),
    })
  }

  get searchValue() {
    return this.bookForm.get('searchValue') as FormControl;
  }

}
