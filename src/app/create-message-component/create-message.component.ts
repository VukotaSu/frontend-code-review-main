import { Component } from '@angular/core';
import { Message, ServiceService } from '../service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from '../message-component/message.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-message',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MessageComponent,
    NgIf,
    NgClass,
  ],
  template: './create-message.component.html'
})

export class CreateMessageComponent {

  message: Message = new Message('', 'draft');
  private messageService: ServiceService;

  constructor(messageService: ServiceService) {
    this.messageService = messageService;
  }

  async onSubmit() {
    this.message.status = 'pending';
    const queryParams = `?text=${encodeURIComponent(this.message.text)}`;
    const res = await fetch(`http://127.0.0.1:4010/messages/send${queryParams}`, {
      method: 'GET',
    });
    this.message.status = res.status === 204 ? 'sent' : 'failed';
    this.messageService.add(this.message);
    this.message = new Message('', 'draft');
  }
}
