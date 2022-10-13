import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, map, mergeMap, of } from 'rxjs';
import { range } from 'rxjs/internal/observable/range';

@Component({
  selector: 'app-map-demo',
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.css']
})
export class MapDemoComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    let publisher1=range(1,10);
    let square= publisher1.pipe(map((ele)=>ele*ele));
    let subscriber1= square.subscribe((data:any)=> {
    //console.log(data);
  });

    // without mergeMap()
  let usersPublisher = of(1, 2, 3, 4);
  let usersSubscriber = usersPublisher.subscribe((user) => {
    //console.log(user);
    const url = `https://jsonplaceholder.typicode.com/users/${user}`;
    this.httpClient.get(url).subscribe((userData) => {
      //console.log(userData);
    });
  });

  //with mergeMap()
  //usersPublisher = of(1, 2, 3, 4);
  let usersSubscriber2 = usersPublisher.pipe(
      mergeMap((user) => {
        const url =`https://jsonplaceholder.typicode.com/users/${user}`;
        return this.httpClient.get(url); //inner observable
      })
    ).subscribe((userData) => {
      //console.log(userData);
    });

    //with concate Map()
  //order will be maintained
  let usersSubscriber3 = usersPublisher.pipe(
    concatMap((user) => {
      const url =`https://jsonplaceholder.typicode.com/users/${user}`;
      return this.httpClient.get(url); //inner observable
    })
  ).subscribe((userData) => {
    console.log(userData);
  });


  }

}
