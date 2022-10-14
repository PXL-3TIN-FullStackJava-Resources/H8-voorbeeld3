import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {
  addForm!: FormGroup;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      title: new FormControl('example book', [Validators.required]),
      author: new FormControl('example author', [Validators.required]),
      isbn: new FormControl('123456789', [Validators.required, Validators.minLength(6)]),
      genre: new FormControl('abc', [Validators.required])
    });
  }

  handleSubmit(): void{
    const newBook: Book = new Book(this.addForm.value.title, this.addForm.value.author, 
                                   this.addForm.value.isbn, this.addForm.value.genre);
    this.bookService.addBook(newBook).subscribe(data => console.log(data));
  }

}