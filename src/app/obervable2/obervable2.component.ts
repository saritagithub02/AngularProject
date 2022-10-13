import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-obervable2',
  templateUrl: './obervable2.component.html',
  styleUrls: ['./obervable2.component.css'],
})
export class Obervable2Component implements OnInit {
  publisher1: any;
  subscriber1: any;
  responseData: any[]=[];
  constructor() {}

  ngOnInit(): void {
    //publisher or producer
    this.publisher1 = new Observable(function (publisher) {
      console.log("i m publishing the first two data");
      publisher.next(['oneeeee', 'twooooo']);
      console.log("i m publishing the next two data");
      publisher.next(['threeeee', 'fourrr']);
      console.log("i m publishing the final data");
      publisher.next(['fiveeeee']);
      publisher.complete();
    });

    //consumer
    this.subscriber1 = this.publisher1.subscribe({
      next: (response: any) => {
        console.count('next method called..');
        console.log(response);
        this.responseData=this.responseData.concat(response);
      },
      error: (err: any) => {
        console.log('error occured', err);
      },
      complete: () => {
        console.log('final data has reached');
      },
    });
  }
}
