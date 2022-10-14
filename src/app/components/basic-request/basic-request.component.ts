import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-basic-request',
  templateUrl: './basic-request.component.html',
  styleUrls: ['./basic-request.component.css']
})
export class BasicRequestComponent implements OnInit {
  bookList!: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data =>{
      this.bookList = data;
    });
  }

}
