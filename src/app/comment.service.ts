import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import {Comment} from './model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url='https://jsonplaceholder.typicode.com/comments';
  constructor(private http:HttpClient) { }

  //get all comments from the url using observable comment array
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url)   
  }

 
}
