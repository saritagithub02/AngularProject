import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observable4',
  templateUrl: './observable4.component.html',
  styleUrls: ['./observable4.component.css']
})
export class Observable4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // when we use subject - all the subscribers will get the all the future values 
    //but no past emitted values.
    //let publisher1=new Subject();

    //when we use BehaviorSubject one past value and all future values. 
    //while declaring BehaviorSubject, it will take one default value.
    // if no data is published by publisher then only the default value shows.
    // if publisher publish some data then the default value will not shown up.
    //let publisher1=new BehaviorSubject('Default values');

    //with replaySubject all past values+ all upcoming values show .
    //let publisher1=new ReplaySubject();

    //with AsyncSubject , the subscribers will get data only when publisher call the complete function
    //the data just before the complete function will be given to all subscribers.
    let publisher1= new AsyncSubject();
    publisher1.next("aaaa");
    //publisher1.complete();
    publisher1.next("bbbb");
    let subscriber1=publisher1.subscribe((data)=>console.log("subscriber1-"+data));
   publisher1.next("cccc"); 
   publisher1.complete();
    publisher1.next("dddd");
    let subscriber2=publisher1.subscribe((data)=>console.log("subscriber2-"+data));
    publisher1.next("eeee");
    //publisher1.complete();
    let subscriber3=publisher1.subscribe((data)=>console.log("subscriber3-"+data));
    publisher1.next("ffff");
    //publisher1.complete();


  }

}
