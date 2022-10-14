import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicRequestComponent } from './components/basic-request/basic-request.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { PostRequestComponent } from './components/post-request/post-request.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicRequestComponent,
    AsyncPipeComponent,
    BookItemComponent,
    PostRequestComponent
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
