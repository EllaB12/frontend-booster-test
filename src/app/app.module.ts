import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookInfoComponent } from './components/book-info/book-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    BookListComponent,
    BookInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
