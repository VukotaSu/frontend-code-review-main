import { Component } from '@angular/core';
import { CreateMessageComponent } from './create-message-component/create-message.component';
import { ChatComponent } from './chat-component/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ChatComponent,
    CreateMessageComponent
  ],
  template: `
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl my-8">{{ title }}</h1>
      <app-chat></app-chat>
      <app-create-message></app-create-message>
    </div>
  `,
})
export class AppComponent {
  title = 'Chat';
}


/* NOTE */

/* I split the components into separate parts so that only app-root remains in app.component.ts. 
Also, each component has its own html. 
I had a problem with the API because 'body' cannot be used in the GET method. 
Now when the project is started, it is possible to add messages, but after refreshing the page, the messages disappear. 
The reason for the disappearance of messages is that messages are not being recorded via the endpoint.
I started the Server and saw that I was getting a 204 status but no messages were being logged. 
I also tried using Postman to assign values ​​and list them, but I only get three messages that have already been written, without my messages.


{
    "messages": [
        {
            "text": "Hello, World!",
            "status": "sent"
        },
        {
            "text": "How are you today?",
            "status": "sent"
        },
        {
            "text": "Thanks, I'm fine. How about you?",
            "status": "sent"
        }
    ]
}

*/
