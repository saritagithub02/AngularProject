import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message1',
  templateUrl: './message1.component.html',
  styleUrls: ['./message1.component.css']
})
export class Message1Component implements OnInit {

  messages:any[]=[];
  subscription:Subscription= new Subscription();
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    // subscribe to messages subject-observable
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
