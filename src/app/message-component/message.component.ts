import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-massage',
  standalone: true,
  template: './message.component.html',
  imports: [NgClass]
})

export class MessageComponent {
  @Input({ required: true }) message: any;
  @Input() no: any;
}
