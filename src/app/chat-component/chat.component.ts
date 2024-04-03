import { Component, OnInit } from '@angular/core';
import { Message, ServiceService } from '../service.service';
import { NgForOf } from '@angular/common';
import { MessageComponent } from '../message-component/message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgForOf,
    MessageComponent
  ],
  templateUrl: 'chat.component.html'
})

export class ChatComponent implements OnInit {
  messages: Message[] = [];
  constructor(
    private messageService: ServiceService
  ) {}

  async ngOnInit() {
    // @ts-ignore
    await this.messageService.all();
    this.messages = this.messageService.messages;
  }
}