import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messagr2',
  templateUrl: './messagr2.component.html',
  styleUrls: ['./messagr2.component.css']
})
export class Messagr2Component implements OnInit {
newMsg:any;
  constructor(private messageService:MessageService) { }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(this.newMsg);
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }

  ngOnInit(): void {

  }

}
