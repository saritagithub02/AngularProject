import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css'],
})
export class Observable1Component implements OnInit {
  users: any[] = [];
  comments: any[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchComments();
  }
  fetchUsers() {
    let promiseObj = fetch('https://jsonplaceholder.typicode.com/users');
    promiseObj
      .then((response) => response.json())
      .then((finalResponse) => {
        this.users = finalResponse;
      });
  }
  fetchComments() {
    let obserableObj = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    obserableObj.subscribe({
      next: (response: any) => {
        this.comments = response;
        console.log(response.length);
        console.log("next method called");
      },
      error: (err) => {
        console.log('error occured', err);
      },
      complete: () => {
        console.log('this is the final data.');
      },
    });
  }
}
