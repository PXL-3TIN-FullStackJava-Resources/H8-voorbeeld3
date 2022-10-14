import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  bookList$!: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBooks();
  }

}
